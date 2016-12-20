import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
 import AppReducer from './AppReducer';
// import ActiveUserReducer from './reducer-active-user';

const allReducers = combineReducers({
  routing: routerReducer,
  app: AppReducer
});

export default allReducers;
