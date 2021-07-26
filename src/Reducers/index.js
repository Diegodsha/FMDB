import { combineReducers } from 'redux';
import moviesReducer from './Movies';
import filterReducer from './GenreFilter';

const rootReducer = combineReducers({ moviesReducer, filterReducer });

export default rootReducer;
