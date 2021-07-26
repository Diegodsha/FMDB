import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMovies } from '../Actions/index';
import List from '../Styles/List.css';

const MovieList = () => {
  const mostPopularMovies = useSelector((state) => state.moviesReducer[0]);
  const dispatch = useDispatch();
  console.log('redner');

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <>
      <h3 className={List.h3}>MovieList</h3>
      <div>
        {mostPopularMovies?.map((movie) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </div>
    </>
  );
};

export default MovieList;
