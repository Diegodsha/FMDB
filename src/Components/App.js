import { useSelector } from 'react-redux';
import MovieList from '../Containers/MovieList';
import Carousel from './Carousel';
import Nav from './Nav';

function App() {
  const mostPopularMovies = useSelector((state) => state.moviesReducer[0]);
  const comingSoonMovies = useSelector((state) => state.moviesReducer[1]);
  const actionMovies = useSelector((state) => state.moviesReducer[2]);
  const sciFiMovies = useSelector((state) => state.moviesReducer[3]);
  const romanceMovies = useSelector((state) => state.moviesReducer[4]);
  const popularSeries = useSelector((state) => state.moviesReducer[5]);

  return (
    <div className="App">
      <Nav />
      <Carousel />
      <MovieList movies={mostPopularMovies} title="Most popular movies" filterActive="yes" />
      <MovieList movies={comingSoonMovies} title="Coming Soon" />
      <MovieList movies={actionMovies} title="Action" />
      <MovieList movies={sciFiMovies} title="Sci-Fi" />
      <MovieList movies={romanceMovies} title="Romance" />
      <MovieList movies={popularSeries} title="Most Popular Series" type="series" />
    </div>
  );
}

export default App;
