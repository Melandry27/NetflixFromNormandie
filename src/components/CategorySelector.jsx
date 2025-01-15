import React, { useContext } from "react";
import { MovieContext } from "../context/MovieProvider";

const CategorySelector = () => {
  const { state, actions } = useContext(MovieContext);

  return (
    <div className="flex flex-col items-center p-4 text-white bg-gray-900">
      <div className="flex mb-4 space-x-4">
        <button
          className="px-4 py-2 font-bold text-white bg-red-600 rounded hover:bg-red-700"
          onClick={() => actions.categorySelected("popular")}
        >
          Popular
        </button>
        <button
          className="px-4 py-2 font-bold text-white bg-red-600 rounded hover:bg-red-700"
          onClick={() => actions.categorySelected("nowPlaying")}
        >
          Now Playing
        </button>
        <button
          className="px-4 py-2 font-bold text-white bg-red-600 rounded hover:bg-red-700"
          onClick={() => actions.categorySelected("topRated")}
        >
          Top Rated
        </button>
        <button
          className="px-4 py-2 font-bold text-white bg-red-600 rounded hover:bg-red-700"
          onClick={() => actions.categorySelected("upcoming")}
        >
          Upcoming
        </button>
      </div>
      <h2 className="text-2xl font-bold">
        {state.categorySelected.popular && "Popular"}
        {state.categorySelected.nowPlaying && "Now Playing"}
        {state.categorySelected.topRated && "Top Rated"}
        {state.categorySelected.upcoming && "Upcoming"}
      </h2>
    </div>
  );
};

export default CategorySelector;
