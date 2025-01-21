import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Backup from "../assets/images/backup.png";

export const MovieDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const image = data.poster_path
    ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    : Backup;

  useEffect(() => {
    async function fetchMovie() {
      const apiKey = import.meta.env.VITE_TMDB_API_KEY;
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
      );
      const json = await response.json();
      setData(json);
      console.log(json);
    }
    fetchMovie();
  }, [id]);

  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img className="rounded" src={image} alt={data.title} />
        </div>
        <div></div>
      </section>
    </main>
  );
};
