/* eslint-disable camelcase */
/* eslint-disable object-curly-newline */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '../Styles/Card.css';

const MovieCard = ({ movie, button }) => {
  // eslint-disable-next-line no-unused-vars

  const { title, release_date, vote_average, poster_path, id } = movie;

  return (
    <div className="col-5 col-md-3 col-lg-2">
      <div
        className={`card bg-dark text-white ${Card.card}`}
        // style={{ width: '22%' }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          className="card-img"
          alt={title}
        />
        <div
          className="card-img-overlay"
          style={{ background: 'rgba(0, 0, 0, 0.356)' }}
        >
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{release_date}</p>
          <p className="card-text">{vote_average}</p>
          {button === 'yes' ? (
            <Link to={`details/${id}`} style={{ zIndex: '2' }}>
              <button className="btn btn-primary btn-sm" type="button">
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
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  button: PropTypes.string,
};

export default MovieCard;
