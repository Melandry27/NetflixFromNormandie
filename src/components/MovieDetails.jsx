import React, { useContext } from "react";
import { MovieContext } from "../context/MovieProvider";
import MovieDetailsContent from "./MovieDetailsContent";

const MovieDetails = () => {
  const { state, actions } = useContext(MovieContext);

  const isEmpty = (obj) => Object.keys(obj).length === 0;

  return (
    <div className="movie-details">
      {state?.movieData && !isEmpty(state.movieData) ? (
        <MovieDetailsContent movieData={state?.movieData} />
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};

export default MovieDetails;
