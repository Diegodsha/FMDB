import types from './Types';

export const fetchMovies = (movies) => ({
  type: types.fetchMovies,
  movies,
});

export const fetchSeries = (series) => ({
  type: types.fetchSeries,
  series,
});
