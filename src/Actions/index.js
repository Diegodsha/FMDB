/* eslint-disable no-unused-vars */
import { getMostPopularMovies, getUpcomingMovies, allMovies } from '../API/api';
import types from './Types';

export const fetchMoviesAction = (movies) => ({
  type: types.fetchMovies,
  movies,
});

export const fetchSeriesAction = (series) => ({
  type: types.fetchSeries,
  series,
});

export const filterAction = (filter) => ({
  type: types.changeFilter,
  filter,
});

export const fetchMovies = () => async (dispatch) => {
  const movies = await getMostPopularMovies();
  // console.log(movies);
  dispatch(fetchMoviesAction(movies));
};
