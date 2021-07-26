// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchMovies } from '../Actions/index';
import MovieList from '../Containers/MovieList';
import Carousel from './Carousel';
import Nav from './Nav';

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchMovies());
  // }, []);
  return (
    <div className="App">
      <Nav />
      <Carousel />
      <MovieList />
    </div>
  );
}

export default App;
