import { useContext } from "react";
import { MovieContext } from "../context/MovieProvider";
import BackButton from "./BackButton";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const MovieDetailsContent = () => {
  const {
    actions,
    state: { movieData },
  } = useContext(MovieContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="relative min-h-screen bg-center bg-cover"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 opacity-75 bg-gradient-to-b from-black via-black to-black"></div>
      <div className="relative z-10 flex flex-col items-center px-4 py-12 space-y-8 md:flex-row md:space-y-0 md:space-x-8 md:py-16 lg:px-24">
        <div className="w-full max-w-xs md:max-w-sm">
          <img
            className="w-full rounded-lg shadow-lg"
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt={movieData.title}
          />
        </div>
        <BackButton />

        <div className="w-full text-white md:flex-1">
          <button
            onClick={() =>
              actions.addToWishlist({
                id: movieData.id,
                title: movieData.title,
                poster_path: movieData.poster_path,
                vote_average: movieData.vote_average,
              })
            }
          >
            Add to wishlist
          </button>
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
            {movieData.title}
          </h1>
          <p className="mb-6 text-lg italic text-gray-300">
            {movieData.tagline}
          </p>

          <p className="mb-4 text-gray-200">{movieData.overview}</p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <p className="mb-2">
              <strong className="text-gray-400">Genres:</strong>{" "}
              {movieData.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p className="mb-2">
              <strong className="text-gray-400">Release Date:</strong>{" "}
              {movieData.release_date}
            </p>
            <p className="mb-2">
              <strong className="text-gray-400">Runtime:</strong>{" "}
              {movieData.runtime} minutes
            </p>
            <p className="mb-2">
              <strong className="text-gray-400">Rating:</strong>{" "}
              {movieData.vote_average} ({movieData.vote_count} votes)
            </p>
            <p className="mb-2">
              <strong className="text-gray-400">Budget:</strong> $
              {movieData.budget.toLocaleString()}
            </p>
            <p className="mb-2">
              <strong className="text-gray-400">Revenue:</strong> $
              {movieData.revenue.toLocaleString()}
            </p>
            <p className="col-span-2 mb-2 lg:col-span-3">
              <strong className="text-gray-400">Production Companies:</strong>{" "}
              {movieData.production_companies
                .map((company) => company.name)
                .join(", ")}
            </p>
            <p className="mb-2">
              <strong className="text-gray-400">Language:</strong>{" "}
              {movieData.original_language}
            </p>
            <p className="mb-2">
              <strong className="text-gray-400">Homepage:</strong>{" "}
              <a
                href={movieData.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-600"
              >
                Visit
              </a>
            </p>
          </div>

          <div className="mt-8">
            <h2 className="mb-4 text-3xl font-bold">Cast</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {movieData.credits.cast.slice(0, 6).map((castMember) => (
                <div
                  key={castMember.id}
                  className="flex items-center space-x-4"
                >
                  <img
                    className="w-16 h-16 rounded-full"
                    src={`https://image.tmdb.org/t/p/w200${castMember.profile_path}`}
                    alt={castMember.name}
                  />
                  <div>
                    <p className="text-lg font-semibold">{castMember.name}</p>
                    <p className="text-gray-400">{castMember.character}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="mb-4 text-3xl font-bold">Similar Movies</h2>
            <Slider {...settings}>
              {movieData.similarMovies.results.slice(0, 10).map((movie) => (
                <div key={movie.id} className="px-2">
                  <img
                    className="w-full rounded-lg shadow-lg"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <p className="mt-2 text-center text-white">{movie.title}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsContent;
