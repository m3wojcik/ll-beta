import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import AppReducer from './AppReducer';
import ClassesReducer from './ClassesReducer';

const allReducers = combineReducers({
  routing: routerReducer,
  app: AppReducer,
  classes: ClassesReducer
});

export default allReducers;
