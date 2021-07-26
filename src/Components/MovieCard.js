/* eslint-disable camelcase */
/* eslint-disable object-curly-newline */
import PropTypes from 'prop-types';
import Card from '../Styles/Card.css';

const MovieCard = ({ movie }) => {
  // eslint-disable-next-line no-unused-vars

  const { title, release_date, vote_average, poster_path } = movie;

  return (
    <div
      className={`card bg-dark text-white ${Card.card}`}
      style={{ width: '22%' }}
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
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
