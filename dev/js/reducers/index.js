import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import AppReducer from './AppReducer';
import ClassesReducer from './ClassesReducer';
import MarksReducer from './MarksReducer';

const allReducers = combineReducers({
  routing: routerReducer,
  app: AppReducer,
  classes: ClassesReducer,
  marks: MarksReducer
});

export default allReducers;
