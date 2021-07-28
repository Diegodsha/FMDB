import { allMovies } from '../API/api';
import types from './Types';

export const fetchMoviesAction = (movies) => ({
  type: types.fetchMovies,
  movies,
});

export const filterAction = (filter) => ({
  type: types.changeFilter,
  filter,
});

export const fetchMovies = () => async (dispatch) => {
  const movies = await allMovies;
  dispatch(fetchMoviesAction(movies));
};
