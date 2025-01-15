import { useContext } from "react";

import { MovieContext } from "../context/MovieProvider";

import CategorySelector from "./CategorySelector";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const { state, actions } = useContext(MovieContext);

  return (
    <div className="min-h-screen text-white bg-gray-800">
      <CategorySelector />
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4">
        {state?.moviesData?.results?.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
