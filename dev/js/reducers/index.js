import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import AppReducer from './AppReducer';
import DashboardClassesReducer from './DashboardClassesReducer';
import ClassesReducer from './ClassesReducer';
import ClassDetailsReducer from './ClassDetailsReducer';
import MarksReducer from './MarksReducer';
import AttendanceReducer from './AttendanceReducer';
import InboxReducer from './InboxReducer';
import MessageReducer from './MessageReducer';
import CreateMessageReducer from './CreateMessageReducer';
import FilesReducer from './FilesReducer';
import TestsReducer from './TestsReducer';
import TestReducer from './TestReducer';
import TestViewReducer from './TestViewReducer';
import ProfileReducer from './ProfileReducer';
import LoginHistoryReducer from './LoginHistoryReducer';
import ElibraryListReducer from './ElibraryListReducer';
import ElibraryDetailsReducer from './ElibraryDetailsReducer';
import ToastsReducer from './ToastsReducer';
import SurveysReducer from './SurveysReducer';
import SurveyReducer from './SurveyReducer';
import SurveyViewReducer from './SurveyViewReducer';
import PaymentsReducer from './PaymentsReducer';

const allReducers = combineReducers({
  routing: routerReducer,
  app: AppReducer,
  dashboardClasses: DashboardClassesReducer,
  classes: ClassesReducer,
  classDetails: ClassDetailsReducer,
  marks: MarksReducer,
  attendance: AttendanceReducer,
  inbox: InboxReducer,
  message: MessageReducer,
  createMessage: CreateMessageReducer,
  files: FilesReducer,
  tests: TestsReducer,
  test: TestReducer,
  testView: TestViewReducer,
  profile: ProfileReducer,
  loginHistory: LoginHistoryReducer,
  elibraryList: ElibraryListReducer,
  elibraryDetails: ElibraryDetailsReducer,
  toasts: ToastsReducer,
  surveys: SurveysReducer,
  survey: SurveyReducer,
  surveyView: SurveyViewReducer,
  payments: PaymentsReducer
});

export default allReducers;
