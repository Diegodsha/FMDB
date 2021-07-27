/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../API/api';
import { moviesEndPoint } from '../API/Endpoints';
import StyledCarousel from '../Styles/Carrousel.module.css';

const Carousel = () => {
  const [FivePopularMovies, setFivePopularMovies] = useState([]);
  useEffect(() => {
    axios.get(`${BASE_URL}${moviesEndPoint.mostPopular}`).then((res) => {
      setFivePopularMovies(res.data.results.slice(0, 5));
    });
  }, []);

  return (
    <div
      id="carouselExampleCaptions"
      className={`carousel slide ${StyledCarousel.margin}`}
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        />
      </div>
      <div className={`carousel-inner ${StyledCarousel.rounded}`}>
        <div className="carousel-item active">
          <img
            src={`https://image.tmdb.org/t/p/original${FivePopularMovies[0]?.poster_path}`}
            className={`d-block w-100 ${StyledCarousel.fit}`}
            alt="..."
          />
        </div>
        {FivePopularMovies.slice(1)?.map((item) => (
          <div key={item.id} className="carousel-item">
            <img
              src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
              className={`d-block w-100 ${StyledCarousel.fit}`}
              alt={item?.title}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
