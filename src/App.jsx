import MovieList from "./components/MovieList";
import { MovieProvider } from "./context/MovieProvider";
import "./index.css";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <MovieList />
      </MovieProvider>
    </div>
  );
}

export default App;
