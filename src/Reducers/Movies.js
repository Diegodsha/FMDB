import types from '../Actions/Types';

const moviesReducer = (state = [], action) => {
  const { type, movies } = action;
  switch (type) {
    case types.fetchMovies:
      return [...state, ...movies];

    default:
      return state;
  }
};

export default moviesReducer;
