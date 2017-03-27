import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import { IntlProvider} from 'react-intl';
import allReducers from './reducers';
import routes from './routes';


const middleware = applyMiddleware(promise(),routerMiddleware(hashHistory), thunk, logger());
const store = createStore(allReducers, middleware);
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store} >
    <IntlProvider locale="en">
      <Router history={history} routes={routes} />
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);
