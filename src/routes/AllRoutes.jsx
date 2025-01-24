import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<MovieList apiPath="movie/now_playing" title="Home" />}
        />
        <Route path="/movie/:id" element={<MovieDetail title="" />} />
        <Route
          path="/movie/popular"
          element={<MovieList apiPath="movie/popular" title="Popular" />}
        />
        <Route
          path="/movie/top"
          element={<MovieList apiPath="movie/top_rated" title="Top Rated" />}
        />
        <Route
          path="/movie/upcoming"
          element={<MovieList apiPath="movie/upcoming" />}
        />
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
