import { useContext } from "react";
import { Link } from "react-router";
import { MovieContext } from "../context/MovieProvider";

const NavBar = () => {
  const { state } = useContext(MovieContext);

  const numberInWishlist = state.wishlistData.length;
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800">
      <h1 className="text-2xl font-bold text-white">Netflix</h1>
      <Link
        to="/wishlist"
        className="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-red-600"
      >
        🛍️ Wishlist
        <span className="inline-flex items-center justify-center w-6 h-6 ml-2 text-xs font-bold text-white bg-red-500 rounded-full">
          {numberInWishlist}
        </span>
      </Link>
    </div>
  );
};

export default NavBar;
