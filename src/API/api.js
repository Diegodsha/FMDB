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
const { popular, documentary, sciFiS } = seriesEndPoint;

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

const getDocumentarySeries = async () => {
  const res = await axios.get(`${BASE_URL}${documentary}`);
  return res.data.results;
};

const getSciFiSeries = async () => {
  const res = await axios.get(`${BASE_URL}${sciFiS}`);
  return res.data.results;
};

const allMovies = Promise.all([
  getMostPopularMovies(),
  getUpcomingMovies(),
  getActionMovies(),
  getSciFiMovies(),
  getRomanceMovies(),
  getPopularSeries(),
  getSciFiSeries(),
  getDocumentarySeries(),
]).then((res) => res);

export { allMovies };
