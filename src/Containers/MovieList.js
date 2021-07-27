import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { filterAction } from '../Actions/index';
import GenreFilter from '../Components/GenreFilter';
import List from '../Styles/List.css';
import MovieCard from '../Components/MovieCard';

const MovieList = ({
  title,
  movies,
  filterActive,
  type,
}) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filterReducer);
  const handleFilterChange = (e) => {
    dispatch(filterAction(e.target.value));
  };

  return (
    <>
      <div className="d-flex m-4 mt-5">
        <h3 className={List.h3}>{title}</h3>
        {filterActive === 'yes' ? (
          <GenreFilter handleFilterChange={handleFilterChange} />
        ) : null}
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
          ?.filter(
            (movie) => movie.genre_ids.includes(Number(filter)) || filter === 'All',
          )
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} button="yes" type={type} />
          ))}
      </div>
    </>
  );
};

MovieList.defaultProps = {
  filterActive: 'no',
  type: 'movies',
};

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.isRequired,
  filterActive: PropTypes.string,
  type: PropTypes.string,
};

export default MovieList;
