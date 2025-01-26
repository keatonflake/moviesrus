import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import { useTitle } from "../hooks/useTitle";

export const FavoriteList = () => {
  const [favorites, setFavorites] = useState([]);
  const [movies, setMovies] = useState([]);
  const pageTitle = useTitle("Favorites");

  useEffect(() => {
    const storedFavorites =
      JSON.parse(localStorage.getItem("TMDB_favorites")) || [];
    setFavorites(storedFavorites);

    async function fetchMovies() {
      const apiKey = import.meta.env.VITE_TMDB_API_KEY;
      const movieDetails = await Promise.all(
        storedFavorites.map(async (movieId) => {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
          );
          const data = await response.json();
          return data;
        })
      );
      setMovies(movieDetails);
    }

    if (storedFavorites.length > 0) {
      fetchMovies();
    }
  }, []);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <h1 className="py-4 text-center text-5xl dark:text-white">Favorites</h1>
        {movies.length === 0 ? (
          <p>You have no favorite movies yet.</p>
        ) : (
          <div className="flex justify-start flex-wrap other:justify-evenly">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};
