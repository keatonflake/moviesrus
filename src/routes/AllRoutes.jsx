// src/components/AllRoutes.jsx
import { Routes, Route } from "react-router-dom";
import {
  MovieList,
  MovieDetail,
  FavoriteList,
  Search,
  PageNotFound,
} from "../pages";

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
        <Route path="/favorites" element={<FavoriteList />} />{" "}
        {/* Add this route */}
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
