import { useState, useEffect } from "react";

export const UseFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const url = queryTerm
    ? `https://api.themoviedb.org/3/${apiPath}?api_key=${apiKey}&query=${queryTerm}`
    : `https://api.themoviedb.org/3/${apiPath}?api_key=${apiKey}`;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }

    fetchMovies();
  }, [url]);
  return { data };
};
