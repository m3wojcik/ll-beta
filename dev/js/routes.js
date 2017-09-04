import React from 'react';
import ReactDOM from "react-dom";
import { Route, IndexRoute, IndexRedirect } from 'react-router'
import App from './components/App';
import AppLayoutContainer from './containers/AppLayoutContainer';
import DashboardContainer from './containers/DashboardContainer';
import MainContainer from './containers/MainContainer';
import NotificationsContainer from './containers/NotificationsContainer';
import MarksContainer from './containers/marks/MarksContainer';
import AttendanceContainer from './containers/attendance/AttendanceContainer';
import ClassesContainer from './containers/classes/ClassesContainer';
import ClassDetailsContainer from './containers/classes/ClassDetailsContainer';
import MessageContainer from './containers/messages/MessageContainer';
import InboxContainer from './containers/messages/InboxContainer';
import SentContainer from './containers/messages/SentContainer';
import TrashContainer from './containers/messages/TrashContainer';
import CreateMessageContainer from './containers/messages/CreateMessageContainer';
import FilesContainer from './containers/files/FilesContainer';
import TestsContainer from './containers/tests/TestsContainer';
import TestContainer from './containers/tests/TestContainer';
import TestViewContainer from './containers/TestViewContainer';
import ProfileContainer from './containers/profile/ProfileContainer';
import EditProfileContainer from './containers/profile/EditProfileContainer';
import LoginHistoryContainer from './containers/profile/LoginHistoryContainer';
import ElibraryContainer from './containers/library/ElibraryContainer';
import SurveysContainer from './containers/SurveysContainer';
import SurveyContainer from './containers/SurveyContainer';
import SurveyViewContainer from './containers/SurveyViewContainer';
import PaymentsContainer from './containers/PaymentsContainer';
import LoginContainer from './containers/login/LoginContainer';
import Authentication from './components/Authentication';

export default (
  <Route path="/" component={App}>
    <Route path="login" component={LoginContainer} />
    <Route component={Authentication(AppLayoutContainer)}>
        <IndexRoute component={DashboardContainer} />
        <Route path="marks" header="Marks" component={MarksContainer} />
        <Route path="classes" component={ClassesContainer} />
        <Route path="classDetails/:classId" header="Class details" component={ClassDetailsContainer} />
        <Route path="attendance" header="Attendance" component={AttendanceContainer} />
        <Route path="inbox" header="Inbox" component={InboxContainer}/>
        <Route path="sent" header="Sent" component={SentContainer}/>
        <Route path="trash" header="Trash" component={TrashContainer}/>
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
          <Route path="list" component={ElibraryContainer}  />
        </Route>
        <Route path="surveys" component={SurveysContainer} />
        <Route path="survey/:surveyId" component={SurveyContainer} />
        <Route path="surveyview/:surveyId" component={SurveyViewContainer} />
        <Route path="payments" component={PaymentsContainer} />
    </Route>
  </Route>
)
