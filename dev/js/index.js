import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { Router, Route, IndexRoute,hashHistory, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import allReducers from './reducers';
import App from './components/App';
import DashboardContainer from './containers/DashboardContainer';

import MainContainer from './containers/MainContainer';
import MarksContainer from './containers/MarksContainer';
import AlertsContainer from './containers/AlertsContainer';

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(allReducers, middleware);
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/"  component={App}>
        <IndexRoute header="Dashboard" component={DashboardContainer} />
        <Route header="Main" component={MainContainer} childComponents={[<MarksContainer />, <AlertsContainer />]} >
            <Route path="marks" header="Marks" component={MarksContainer} />
            <Route path="alerts" header="Alerts" component={AlertsContainer} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
