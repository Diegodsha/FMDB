import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../Actions';
import MovieList from '../Containers/MovieList';
import Carousel from './Carousel';
import Footer from './Footer';
import Nav from './Nav';

function App() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesReducer);

  useEffect(() => {
    if (movies.length < 8) {
      dispatch(fetchMovies());
    }
  }, []);

  const mostPopularMovies = useSelector((state) => state.moviesReducer[0]);
  const comingSoonMovies = useSelector((state) => state.moviesReducer[1]);
  const actionMovies = useSelector((state) => state.moviesReducer[2]);
  const sciFiMovies = useSelector((state) => state.moviesReducer[3]);
  const romanceMovies = useSelector((state) => state.moviesReducer[4]);
  const popularSeries = useSelector((state) => state.moviesReducer[5]);
  const sciFiSeries = useSelector((state) => state.moviesReducer[6]);
  const documentarySeries = useSelector((state) => state.moviesReducer[7]);

  return (
    <div className="App">
      <Nav />
      <Carousel />
      <MovieList movies={mostPopularMovies} title="Most popular movies" filterActive="yes" />
      <MovieList movies={comingSoonMovies} title="Coming Soon" />
      <MovieList movies={actionMovies} title="Action" />
      <MovieList movies={sciFiMovies} title="Sci-Fi" />
      <MovieList movies={romanceMovies} title="Romance" />
      <MovieList movies={popularSeries?.slice(0, -1)} title="Most Popular Series" type="series" />
      <MovieList movies={sciFiSeries} title="Sci-Fi & Animation Series" type="series" />
      <MovieList movies={documentarySeries} title="Documentary Series" type="series" />
      <Footer />
    </div>
  );
}

export default App;
