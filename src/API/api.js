/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { moviesEndPoint, seriesEndPoint } from './Endpoints';

const API_KEY = 'k_8v3xbv31';
const { mostPopular, top250, inTheaters, comingSoon } = moviesEndPoint;
const { mostPopularS, top250S } = seriesEndPoint;

const getMostPopularMovies = async () => {
  const res = await axios.get(`${mostPopular}${API_KEY}`);
  return res.data.items;
};

const getTop250Movies = async () => {
  const res = await axios.get(`${top250}${API_KEY}`);
  return res.data.items;
};

const allMovies = Promise.all([getMostPopularMovies(), getTop250Movies()]).then((res) => res);

const getSeries = async () => {
  const res = await axios.get(`${mostPopularS}${API_KEY}`);
  return res.data;
};

export { getMostPopularMovies, getTop250Movies, getSeries, allMovies };
