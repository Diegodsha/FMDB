import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMovies, filterAction } from '../Actions/index';
import GenreFilter from '../Components/GenreFilter';
import List from '../Styles/List.css';
import MovieCard from '../Components/MovieCard';

const MovieList = ({ title, movies }) => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filterReducer);

  const handleFilterChange = (e) => {
    dispatch(filterAction(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <>
      <div className="d-flex my-3">
        <h3 className={List.h3}>{title}</h3>
        <GenreFilter handleFilterChange={handleFilterChange} />
      </div>
      <div
        className="row g-0"
        style={{
          rowGap: '20px',
          columnGap: '20px',
          justifyContent: 'space-evenly',
        }}
      >
        {movies
          ?.filter((movie) => movie.genre_ids.includes(Number(filter)) || filter === 'All')
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </>
  );
};

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.isRequired,
};

export default MovieList;
