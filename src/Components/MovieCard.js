/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '../Styles/Card.module.css';

const MovieCard = ({ movie, button, type }) => {
  const {
    title,
    release_date,
    vote_average,
    poster_path,
    id,
    name,
    first_air_date,
  } = movie;

  return (
    <div className="col-5 col-md-3 col-lg-2">
      <div className={`card bg-dark text-white ${Card.cardStyled}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          className="card-img"
          alt={title}
        />
        <div className={`card-img-overlay ${Card.overlay}`}>
          <div>
            <h5 className="card-title">{title ?? name}</h5>
            <p className="card-text">
              {release_date?.split('-')[0] ?? first_air_date?.split('-')[0]}
            </p>
            <p className="card-text">
              Rating:
              {' '}
              {vote_average}
            </p>
          </div>
          {button === 'yes' ? (
            <Link
              to={`details/${type === 'series' ? 'serie' : 'movie'}/${id}`}
              className={`w-100 ${Card.index}`}
            >
              <button className="btn btn-outline-warning w-100" type="button">
                See more
              </button>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

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
