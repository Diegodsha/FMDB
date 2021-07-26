import PropTypes from 'prop-types';
import genres from '../Helpers/helpers';

const CategoryFilter = ({ handleFilterChange }) => (
  <select
    onChange={handleFilterChange}
    id="movieGenreFilter"
    className="form-select w-25 mx-3"
    aria-label="Default select example"
  >
    <option defaultValue>All</option>
    {genres.map((genre) => (
      <option value={genre.id} key={genre.id}>
        {genre.name}
      </option>
    ))}
  </select>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
