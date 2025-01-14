const API_KEY = import.meta.env.MOVIEDB_API_KEY;

export const getPopulareMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );

  if (!res.ok) throw new Error("Failed to fetch popular movies");

  return res.json();
};

export const getOnAirMovie = async () => {
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

export const getOneMovieDetails = async (movieId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );

  if (!res.ok) throw new Error("Failed to fetch movie details");

  return res.json();
};

export const getOneMovieBySearch = async (searchQuery) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
  );

  if (!res.ok) throw new Error("Failed to fetch movie details");

  return res.json();
};
