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
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import pl from 'react-intl/locale-data/pl';
import allReducers from './reducers';
import routes from './routes';
import api from './middleware/api'

addLocaleData([...en, ...pl]);

const middleware = applyMiddleware(promise(),routerMiddleware(hashHistory), thunk, api, logger());
const store = createStore(allReducers, middleware);
const history = syncHistoryWithStore(hashHistory, store);

const token = localStorage.getItem('access_token');
if (token) {
  store.dispatch({ type: "AUTH_USER" });
}
ReactDOM.render(
  <Provider store={store} >
    <IntlProvider locale="pl">
    <div>
      <Router history={history} routes={routes} />
      <Snackbar />
      </div>
    </IntlProvider>

  </Provider>,
  document.getElementById('root')
);
