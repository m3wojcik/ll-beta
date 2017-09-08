import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import { Snackbar } from 'react-redux-snackbar';
import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'

import allReducers from './reducers';
import routes from './routes';
import api from './middleware/api'



const middleware = applyMiddleware(promise(),routerMiddleware(hashHistory), thunk, api, logger());
const store = createStore(allReducers, middleware);
const history = syncHistoryWithStore(hashHistory, store);

const token = localStorage.getItem('access_token');
if (token) {
  store.dispatch({ type: "AUTH_USER" });
}
ReactDOM.render(
  <Provider store={store} > 
    <div>
      <Router history={history} routes={routes} />
      <Snackbar />
      </div>
  </Provider>,
  document.getElementById('root')
);
