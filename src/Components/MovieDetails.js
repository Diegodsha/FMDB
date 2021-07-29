import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../API/api';
import { API_KEY } from '../API/Endpoints';
import MovieCard from './MovieCard';

const MovieDetails = ({ match }) => {
  const [Movie, setMovie] = useState({});
  const [SimilarMovies, setSimilarMovies] = useState([]);
  const { id } = match.params;

  useEffect(async () => {
    const res = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits`,
    );
    setMovie(res.data);
  }, []);

  useEffect(async () => {
    const res = await axios.get(
      `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}&page=1`,
    );
    setSimilarMovies(res.data.results.slice(0, 10));
  }, []);

  return (
    <div className="row justify-content-center g-0 mb-5">
      <div
        className=" col-11 my-4"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${Movie.poster_path ?? '/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg'})`,
          height: '400px',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          borderRadius: '1rem',
        }}
      />
      <div
        className="col-11 text-white mb-4 p-4"
        style={{ background: '#040404', borderRadius: '1rem', padding: '10px' }}
      >
        <span className="d-flex justify-content-between">
          <h1>{Movie.title}</h1>
          <Link to="/">
            <button className="btn btn-outline-warning w-100" type="button">
              Go Back
            </button>
          </Link>
        </span>
        <div className="my-2 d-flex justify-content-between">
          <div
            className="d-flex justify-content-between"
            style={{ width: '250px' }}
          >
            <span>{Movie.release_date?.split('-')[0]}</span>
            <span>
              {Movie.runtime}
              {' '}
              min
            </span>
            <span className="pe-2">
              Rating:
              {' '}
              {Movie.vote_average}
            </span>
          </div>
          <span>{(Movie.production_companies && Movie.production_companies[0].name) ?? null}</span>
        </div>
        <p className="my-4">{Movie.overview}</p>
        <div>
          Protagonists:
          {' '}
          {Movie.credits?.cast.map((char) => `${char.name}, `).slice(0, 6)}
        </div>
      </div>
      <h3 className="px-4">Similar movies</h3>
      <div
        className="row g-0"
        style={{
          rowGap: '20px',
          columnGap: '20px',
          justifyContent: 'space-evenly',
        }}
      >
        {SimilarMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: {
      id: 123,
    },
  }).isRequired,
};

export default MovieDetails;
