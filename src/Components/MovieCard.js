import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '../Styles/Card.module.css';

const MovieCard = ({ movie, button, type }) => (
  <div className={`col-3 col-md-3 col-lg-2 ${Card.width}`}>
    <div className={`card bg-dark text-white ${Card.cardStyled}`}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="card-img"
        alt={movie.title}
      />
      <div
        className={`card-img-overlay d-flex align-items-end ${Card.overlay}`}
      >
        {button === 'yes' ? (
          <Link
            to={`details/${type === 'series' ? 'serie' : 'movie'}/${movie.id}`}
            className={`w-100 ${Card.index}`}
          >
            <button
              className={`btn btn-outline-warning w-100 ${Card.cardBtn}`}
              type="button"
            >
              See more
            </button>
          </Link>
        ) : null}
      </div>
    </div>
  </div>
);

MovieCard.defaultProps = {
  button: 'no',
  type: 'movies',
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    poster_path: PropTypes.string,
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    first_air_date: PropTypes.string,
  }).isRequired,
  button: PropTypes.string,
  type: PropTypes.string,
};

export default MovieCard;
