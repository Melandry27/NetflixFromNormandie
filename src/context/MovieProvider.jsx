import React, { useCallback, useEffect } from "react";
import { useLocation } from "react-router";
import {
  getMovieCredits,
  getMoviesBySearch,
  getNowPlayingMovies,
  getOneMovieDetails,
  getPopulareMovies,
  getSimilarMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../services/movieServices";

const MovieContext = React.createContext();

const MovieProvider = ({ children }) => {
  const location = useLocation();

  const [moviesData, setMoviesData] = React.useState([]);
  const [movieData, setMovieData] = React.useState({});
  const [wishlistData, setWishlistData] = React.useState([]);
  const [categorySelected, setCategorySelected] = React.useState({
    popular: true,
    nowPlaying: false,
    topRated: false,
    upcoming: false,
  });

  const fetchSearchMovies = useCallback(async (query) => {
    if (!query) {
      const data = await getPopulareMovies();
      return setMoviesData(data);
    }

    const data = await getMoviesBySearch(query);
    setMoviesData(data);
  }, []);

  const fetchPopularMovie = useCallback(async () => {
    const data = await getPopulareMovies();
    setMoviesData(data);
  }, []);

  const fetchNowPlayingMovie = useCallback(async () => {
    const data = await getNowPlayingMovies();
    setMoviesData(data);
  }, []);

  const fetchTopRatedMovie = useCallback(async () => {
    const data = await getTopRatedMovies();
    setMoviesData(data);
  }, []);

  const fetchUpcomingMovie = useCallback(async () => {
    const data = await getUpcomingMovies();
    setMoviesData(data);
  }, []);

  const fetchOneMovie = useCallback(async (movieId) => {
    const data = await getOneMovieDetails(movieId);
    const credits = await getMovieCredits(movieId);
    const similarMovies = await getSimilarMovies(movieId);

    setMovieData({ ...data, credits, similarMovies });
  }, []);

  const handleCategorySelected = (category) =>
    setCategorySelected({
      nowPlaying: false,
      popular: false,
      topRated: false,
      upcoming: false,
      [category]: true,
    });

  const handleAddToWishlist = (movie) => {
    const checkIfMovieAlreadyAdded = wishlistData.find(
      (item) => item.id === movie.id
    );

    if (!checkIfMovieAlreadyAdded)
      setWishlistData((prevState) => [...prevState, movie]);

    localStorage.removeItem("wishlist");
    localStorage.setItem("wishlist", JSON.stringify([...wishlistData, movie]));
  };

  const handleDeleteFromWishlist = (movieId) => {
    const updatedWishlist = wishlistData.filter(
      (movie) => movie.id !== movieId
    );
    setWishlistData(updatedWishlist);

    localStorage.removeItem("wishlist");
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  useEffect(() => {
    if (categorySelected.popular) fetchPopularMovie();
    if (categorySelected.nowPlaying) fetchNowPlayingMovie();
    if (categorySelected.topRated) fetchTopRatedMovie();
    if (categorySelected.upcoming) fetchUpcomingMovie();
  }, [
    fetchPopularMovie,
    categorySelected,
    fetchNowPlayingMovie,
    fetchTopRatedMovie,
    fetchUpcomingMovie,
    fetchSearchMovies,
  ]);

  useEffect(() => {
    const movieId = location.pathname.split("/")[1];
    if (movieId) fetchOneMovie(movieId);

    return () => {
      setMovieData({});
    };
  }, [location.pathname, fetchOneMovie]);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist"));
    if (wishlist) setWishlistData(wishlist);

    return () => {
      setWishlistData([]);
    };
  }, []);

  const value = {
    state: { moviesData, movieData, wishlistData, categorySelected, location },
    actions: {
      deleteFromWishlist: handleDeleteFromWishlist,
      categorySelected: handleCategorySelected,
      addToWishlist: handleAddToWishlist,
      searchMovies: fetchSearchMovies,
    },
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
