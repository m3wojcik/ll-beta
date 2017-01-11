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
import App from './components/App';
import DashboardContainer from './containers/DashboardContainer';
import MainContainer from './containers/MainContainer';
import DashboardClassesContainer from './containers/DashboardClassesContainer';
import NotificationsContainer from './containers/NotificationsContainer';
import MarksContainer from './containers/MarksContainer';
import AttendanceContainer from './containers/AttendanceContainer';
import ClassDetailsContainer from './containers/ClassDetailsContainer';
import MessagesContainer from './containers/MessagesContainer';
import MessageContainer from './containers/MessageContainer';
import InboxContainer from './containers/InboxContainer';
import CreateMessageContainer from './containers/CreateMessageContainer';
import ClassesContainer from './containers/ClassesContainer';
import FilesContainer from './containers/FilesContainer';
import TestsContainer from './containers/TestsContainer';
import TestContainer from './containers/TestContainer';

const middleware = applyMiddleware(promise(),routerMiddleware(hashHistory), thunk, logger());
const store = createStore(allReducers, middleware);
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store} >
    <IntlProvider locale="en">
      <Router history={history}>
        <Route path="/"  component={App}>
          <IndexRoute header="Dashboard"/>
          <IndexRedirect to="dashboard/classes" />
          <Route path="dashboard" component={MainContainer} childComponents={[<DashboardClassesContainer />, <NotificationsContainer />]} >
              <Route path="classes" header="Classes"/>
              <Route path="notifications" header="Notifications"  />
          </Route>
          <Route path="classDetails/:classId" header="Class details" component={ClassDetailsContainer} />
          <Route path="marks" header="Marks" component={MarksContainer} />
          <Route path="attendance" header="Attendance" component={AttendanceContainer} />
          <Route path="inbox" header="Inbox" component={InboxContainer}/>
          <Route path="message/:messageId" component={MessageContainer} />
          <Route path="createmessage" component={CreateMessageContainer} />
          <Route path="classes" component={ClassesContainer} />
          <Route path="files" component={FilesContainer} />
          <Route path="files/:fileId" component={FilesContainer} />
          <Route path="tests" component={TestsContainer} />
          <Route path="test/:testId" component={TestContainer} />
        </Route>
      </Router>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);
