import React, { useContext } from "react";

import { MovieContext } from "../context/MovieProvider";

const MovieList = () => {
  const { moviesData, popularMoviesData } = useContext(MovieContext);

  return <div>MovieList</div>;
};

export default MovieList;
