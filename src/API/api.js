import axios from 'axios';
import { moviesEndPoint, seriesEndPoint } from './Endpoints';

export const BASE_URL = 'https://api.themoviedb.org/3';
const {
  mostPopular,
  sciFi,
  romance,
  action,
  comingSoon,
} = moviesEndPoint;
const { popular } = seriesEndPoint;

const getMostPopularMovies = async () => {
  const res = await axios.get(`${BASE_URL}${mostPopular}`);
  return res.data.results;
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

const getPopularSeries = async () => {
  const res = await axios.get(`${BASE_URL}${popular}`);
  return res.data.results;
};

const allMovies = Promise.all([
  getMostPopularMovies(),
  getUpcomingMovies(),
  getActionMovies(),
  getSciFiMovies(),
  getRomanceMovies(),
  getPopularSeries(),
]).then((res) => res);

const getSeries = async () => {
  const res = await axios.get(`${popular}`);
  return res.data;
};

export { getMostPopularMovies, getSeries, allMovies };
