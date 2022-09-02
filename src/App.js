import Hero from "./components/Hero";
import MovieState from "./Context/MovieContext";



const App = () => {
  return (
    <MovieState>
      <Hero />
    </MovieState>
  );
}

export default App;
