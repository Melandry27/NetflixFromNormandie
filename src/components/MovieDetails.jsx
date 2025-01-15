import { useContext } from "react";
import { MovieContext } from "../context/MovieProvider";
import MovieDetailsContent from "./MovieDetailsContent";

const MovieDetails = () => {
  const { state } = useContext(MovieContext);

  const isEmpty = (obj) => Object.keys(obj).length === 0;

  return (
    <div className="movie-details">
      {state?.movieData && !isEmpty(state.movieData) ? (
        <MovieDetailsContent />
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};

export default MovieDetails;
