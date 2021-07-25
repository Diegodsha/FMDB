import axios from 'axios';

const API_KEY = 'k_8v3xbv31';
const BASE_URL = 'https://imdb-api.com/en/API/MostPopularMovies/';

const getMovies = async () => {
  const res = await axios.get(`${BASE_URL}${API_KEY}`);
  return res.data;
};

const getSeries = async () => {
  const res = await axios.get(`${BASE_URL}${API_KEY}`);
  return res.data;
};

export { getMovies, getSeries };
