import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
// import UserReducer from './reducer-users';
// import ActiveUserReducer from './reducer-active-user';

const allReducers = combineReducers({
  routing: routerReducer
  // users: UserReducer,
  // activeUser: ActiveUserReducer
});

export default allReducers;
