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
import allReducers from './reducers';
import App from './components/App';
import DashboardContainer from './containers/DashboardContainer';
import MainContainer from './containers/MainContainer';
import ClassesContainer from './containers/ClassesContainer';
import NotificationsContainer from './containers/NotificationsContainer';
import MarksContainer from './containers/MarksContainer';
import ClassDetailsContainer from './containers/ClassDetailsContainer';

const middleware = applyMiddleware(promise(),routerMiddleware(hashHistory), thunk, logger());
const store = createStore(allReducers, middleware);
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/"  component={App}>
        <IndexRoute header="Dashboard" component={DashboardContainer} />
        <IndexRedirect to="/classes" />
        <Route header="Main" component={MainContainer} childComponents={[<ClassesContainer />, <NotificationsContainer />]} >
            <Route path="classes" header="Classes"/>
            <Route path="notifications" header="Notifications"  />
        </Route>
        <Route path="classDetails/:classId" header="Class details" component={ClassDetailsContainer} />
        <Route path="marks" header="Marks" component={MarksContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
