import { combineReducers } from 'redux';
import moviesReducer from './Movies';

const rootReducer = combineReducers({ moviesReducer });

export default rootReducer;
