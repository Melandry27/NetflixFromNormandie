import React, { useContext } from "react";
import { Link } from "react-router";
import { MovieContext } from "../context/MovieProvider";

const MovieCard = ({ id, title, poster_path, vote_average }) => {
  const { actions } = useContext(MovieContext);
  return (
    <div key={id} className="p-4 text-white bg-gray-900 rounded-md shadow-md">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="w-full h-auto rounded-md"
      />
      <h2 className="mt-2 text-xl font-bold truncate" title={title}>
        {title}
      </h2>
      <p className="mt-1">⭐{vote_average}</p>
      <div className="flex items-center justify-between mt-2">
        <Link
          className="px-4 py-2 font-bold text-white bg-red-600 rounded hover:bg-red-700"
          to={`/${id}`}
        >
          Details
        </Link>
        <button
          className="px-4 py-2 font-bold text-white bg-red-600 rounded hover:bg-red-700"
          onClick={() =>
            actions.addToWishlist({ id, title, poster_path, vote_average })
          }
        >
          Ajouter à la wishlist
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
