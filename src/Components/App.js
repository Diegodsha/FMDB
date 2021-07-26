import { useSelector } from 'react-redux';
import MovieList from '../Containers/MovieList';
import Carousel from './Carousel';
import Nav from './Nav';

function App() {
  const mostPopularMovies = useSelector((state) => state.moviesReducer);

  return (
    <div className="App">
      <Nav />
      <Carousel />
      <MovieList movies={mostPopularMovies} title="Most popular movies" />
    </div>
  );
}

export default App;
