import types from '../Actions/Types';

const filterReducer = (state = 'All', action) => {
  const { type, filter } = action;
  switch (type) {
    case types.changeFilter:
      return filter;
    default:
      return state;
  }
};

export default filterReducer;
