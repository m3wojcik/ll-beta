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
import NotificationsContainer from './containers/NotificationsContainer';
import MarksContainer from './containers/marks/MarksContainer';
import AttendanceContainer from './containers/attendance/AttendanceContainer';
import ClassesContainer from './containers/classes/ClassesContainer';
import ClassDetailsContainer from './containers/classes/ClassDetailsContainer';
import MessagesContainer from './containers/MessagesContainer';
import MessageContainer from './containers/MessageContainer';
import InboxContainer from './containers/InboxContainer';
import CreateMessageContainer from './containers/CreateMessageContainer';
import FilesContainer from './containers/FilesContainer';
import TestsContainer from './containers/TestsContainer';
import TestContainer from './containers/TestContainer';
import TestViewContainer from './containers/TestViewContainer';
import ProfileContainer from './containers/ProfileContainer';
import EditProfileContainer from './containers/EditProfileContainer';
import LoginHistoryContainer from './containers/LoginHistoryContainer';
import ElibraryListContainer from './containers/ElibraryListContainer';
import SurveysContainer from './containers/SurveysContainer';
import SurveyContainer from './containers/SurveyContainer';
import SurveyViewContainer from './containers/SurveyViewContainer';
import PaymentsContainer from './containers/PaymentsContainer';

const middleware = applyMiddleware(promise(),routerMiddleware(hashHistory), thunk, logger());
const store = createStore(allReducers, middleware);
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store} >
    <IntlProvider locale="en">
      <Router history={history}>
        <Route path="/"  component={App}>
          <IndexRedirect to="dashboard" />
          <Route path="dashboard" component={DashboardContainer} />
          <Route path="marks" header="Marks" component={MarksContainer} />
          <Route path="classes" component={ClassesContainer} />
          <Route path="classDetails/:classId" header="Class details" component={ClassDetailsContainer} />
          <Route path="attendance" header="Attendance" component={AttendanceContainer} />
          <Route path="inbox" header="Inbox" component={InboxContainer}/>
          <Route path="message/:messageId" component={MessageContainer} />
          <Route path="createmessage" component={CreateMessageContainer} />
          <Route path="files" component={FilesContainer} />
          <Route path="files/:fileId" component={FilesContainer} />
          <Route path="tests" component={TestsContainer} />
          <Route path="test/:testId" component={TestContainer} />
          <Route path="testview/:testId" component={TestViewContainer} />
          <Route path="profile">
            <IndexRedirect to="view" />
            <Route path="view" component={ProfileContainer} />
            <Route path="edit" component={EditProfileContainer} />
            <Route path="loginHistory" component={LoginHistoryContainer} />
          </Route>
          <Route path="elibrary">
            <IndexRedirect to="list" />
            <Route path="list" component={ElibraryListContainer}  />
          </Route>
          <Route path="surveys" component={SurveysContainer} />
          <Route path="survey/:surveyId" component={SurveyContainer} />
          <Route path="surveyview/:surveyId" component={SurveyViewContainer} />
          <Route path="payments" component={PaymentsContainer} />
        </Route>
      </Router>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);
