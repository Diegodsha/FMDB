/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { moviesEndPoint, seriesEndPoint } from './Endpoints';

export const BASE_URL = 'https://api.themoviedb.org/3';
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

const getRomanceMovies = async () => {
  const res = await axios.get(`${BASE_URL}${romance}`);
  return res.data.results;
};

const getActionMovies = async () => {
  const res = await axios.get(`${BASE_URL}${action}`);
  return res.data.results;
};

const getSciFiMovies = async () => {
  const res = await axios.get(`${BASE_URL}${sciFi}`);
  return res.data.results;
};

const allMovies = Promise.all([
  getMostPopularMovies(),
  getUpcomingMovies(),
  getActionMovies(),
  getSciFiMovies(),
  getRomanceMovies(),
]).then((res) => res);

const getSeries = async () => {
  const res = await axios.get(`${mostPopularS}`);
  return res.data;
};

export { getMostPopularMovies, getSeries, allMovies };
