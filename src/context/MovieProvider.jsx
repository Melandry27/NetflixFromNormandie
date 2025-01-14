import React, { useCallback, useEffect } from "react";
import { getPopulareMovies } from "../services/movieServices";

const MovieContext = React.createContext();

const MovieProvider = ({ children }) => {
  const [moviesData, setMoviesData] = React.useState([]);
  const [popularMoviesData, setPopularMoviesData] = React.useState([]);

  const fetchData = useCallback(async () => {
    const data = await getPopulareMovies();
    setMoviesData(data);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <MovieContext.Provider value={{ moviesData, popularMoviesData }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
