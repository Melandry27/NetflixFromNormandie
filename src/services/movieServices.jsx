const API_KEY = import.meta.env.VITE_MOVIEDB_API_KEY;

export const getPopulareMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );

  if (!res.ok) throw new Error("Failed to fetch popular movies");

  return res.json();
};

export const getNowPlayingMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
  );

  if (!res.ok) throw new Error("Failed to fetch popular movies");

  return res.json();
};

export const getTopRatedMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
  );

  if (!res.ok) throw new Error("Failed to fetch popular movies");

  return res.json();
};

export const getUpcomingMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
  );

  if (!res.ok) throw new Error("Failed to fetch popular movies");

  return res.json();
};

export const getOneMovieDetails = async (movieId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );

  if (!res.ok) throw new Error("Failed to fetch movie details");

  return res.json();
};

export const getMoviesBySearch = async (searchQuery) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
  );

  if (!res.ok) throw new Error("Failed to fetch movie details");

  return res.json();
};

export const getMovieCredits = async (movieId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
  );

  if (!res.ok) throw new Error("Failed to fetch movie credits");

  return res.json();
};

export const getSimilarMovies = async (movieId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}`
  );

  if (!res.ok) throw new Error("Failed to fetch similar movies");

  return res.json();
};
