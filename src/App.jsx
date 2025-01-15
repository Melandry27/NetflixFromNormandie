import { BrowserRouter, Route, Routes } from "react-router";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import WishList from "./components/WishList";
import { MovieProvider } from "./context/MovieProvider";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <MovieProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/:movieId" element={<MovieDetails />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </MovieProvider>
    </BrowserRouter>
  );
}

export default App;
