import React, { useContext } from "react";
import { MovieContext } from "../context/MovieProvider";
import BackButton from "./BackButton";

const WishList = () => {
  const { state, actions } = useContext(MovieContext);
  return (
    <React.Fragment>
      <BackButton />
      <div className="grid grid-cols-1 gap-4 p-4 bg-gray-800 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {state?.wishlistData?.map((movie) => (
          <div
            key={movie.id}
            className="p-2 text-white bg-gray-900 rounded-md shadow-md"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto rounded-md"
            />
            <h2 className="text-lg font-bold truncate" title={movie.title}>
              {movie.title}
            </h2>
            <p className="text-sm">⭐{movie.vote_average}</p>
            <button
              onClick={() => actions.deleteFromWishlist(movie.id)}
              className="px-2 py-1 mt-2 text-sm text-white bg-red-600 rounded-md"
            >
              Delete from Wishlist
            </button>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default WishList;
