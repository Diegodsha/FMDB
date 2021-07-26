/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { moviesEndPoint, seriesEndPoint } from './Endpoints';

const BASE_URL = 'https://api.themoviedb.org/3';
const { mostPopular, sciFi, romance, action, comingSoon } = moviesEndPoint;
const { mostPopularS, top250S } = seriesEndPoint;

const getMostPopularMovies = async () => {
  const res = await axios.get(`${BASE_URL}${mostPopular}`);
  return res.data.results;
  // console.log(res.data.results);
};

const getUpcomingMovies = async () => {
  const res = await axios.get(`${BASE_URL}${comingSoon}`);
  return res.data.results;
};

const allMovies = Promise.all([
  getMostPopularMovies(),
  getUpcomingMovies(),
]).then((res) => res);

const getSeries = async () => {
  const res = await axios.get(`${mostPopularS}`);
  return res.data;
};

export { getMostPopularMovies, getUpcomingMovies, getSeries, allMovies };
