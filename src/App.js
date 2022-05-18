import MoviesContainer from "./MoviesContainer";
// import Movies from "./Movies";
import "./App.css";
import Dummy from "./Dummy";
import DisplayMovies from "./DisplayMovies";

function App() {
  return (
    <div className="App">
      {/* <Dummy /> */}
      <MoviesContainer />
      <DisplayMovies />
    </div>
  );
}

export default App;
