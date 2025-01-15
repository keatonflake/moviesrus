import { MovieCard } from "../components/MovieCard";

export const MovieList = () => {
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap ">
          <MovieCard />
          <MovieCard />

          <MovieCard />
        </div>
      </section>
    </main>
  );
};
