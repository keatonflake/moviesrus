import { useState, useEffect } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

export const FavoriteButton = ({ id = "" }) => {
  const [icon, setIcon] = useState(false);
  const [storedFavorites, setStoredFavorites] = useState(
    JSON.parse(localStorage.getItem("TMDB_favorites")) || []
  );

  useEffect(() => {
    if (storedFavorites.includes(id)) {
      setIcon(true);
    } else {
      setIcon(false);
    }
  }, [storedFavorites, id]);

  const handleClick = () => {
    let updatedFavorites;

    if (!storedFavorites.includes(id)) {
      updatedFavorites = [...storedFavorites, id];
      setIcon(true);
    } else {
      updatedFavorites = storedFavorites.filter((movie) => movie != id);
      setIcon(false);
    }
    setStoredFavorites(updatedFavorites);
    localStorage.setItem("TMDB_favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <button
        className="flex flex-row pb-4 text-red-500"
        onClick={() => handleClick()}
      >
        {icon ? <MdFavorite size={30} /> : <MdFavoriteBorder size={30} />}{" "}
        <span className="text-black ml-2 dark:text-white">
          Add to Favorites
        </span>
      </button>
    </div>
  );
};
