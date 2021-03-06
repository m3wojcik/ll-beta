import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { snackbarReducer } from 'react-redux-snackbar';
import AppReducer from './AppReducer';
import AlertReducer from './AlertReducer';
import ErrorReducer from './ErrorReducer';
import AuthReducer from './AuthReducer';
import DashboardClassesReducer from './DashboardClassesReducer';
import DashboardAttendancesReducer from './DashboardAttendancesReducer';
import DashboardMarksReducer from './DashboardMarksReducer';
import DashboardMessagesReducer from './DashboardMessagesReducer';
import DashboardFilesReducer from './DashboardFilesReducer';
import DashboardTestsReducer from './DashboardTestsReducer';
import DashboardElibraryReducer from './DashboardElibraryReducer';
import DashboardSurveysReducer from './DashboardSurveysReducer';
import DashboardPaymentsReducer from './DashboardPaymentsReducer';
import DashboardNewsReducer from './DashboardNewsReducer';
import ClassesReducer from './ClassesReducer';
import ClassDetailsReducer from './ClassDetailsReducer';
import MarksReducer from './MarksReducer';
import AttendanceReducer from './AttendanceReducer';
import MessagesReducer from './MessagesReducer';
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
import WallReducer from './WallReducer';

const allReducers = combineReducers({
  auth: AuthReducer,
  alert: AlertReducer,
  routing: routerReducer,
  error: ErrorReducer,
  app: AppReducer,
  form: formReducer,
  dashboardClasses: DashboardClassesReducer,
  dashboardAttendances: DashboardAttendancesReducer,
  dashboardMarks: DashboardMarksReducer,
  dashboardMessages: DashboardMessagesReducer,
  dashboardFiles: DashboardFilesReducer,
  dashboardTests: DashboardTestsReducer,
  dashboardElibrary: DashboardElibraryReducer,
  dashboardSurveys: DashboardSurveysReducer,
  dashboardPayments: DashboardPaymentsReducer,
  dashboardNews: DashboardNewsReducer,
  wall: WallReducer,
  classes: ClassesReducer,
  classDetails: ClassDetailsReducer,
  marks: MarksReducer,
  attendance: AttendanceReducer,
  messages: MessagesReducer,
  files: FilesReducer,
  tests: TestsReducer,
  test: TestReducer,
  testView: TestViewReducer,
  profile: ProfileReducer,
  loginHistory: LoginHistoryReducer,
  elibrary: ElibraryListReducer,
  elibraryDetails: ElibraryDetailsReducer,
  toasts: ToastsReducer,
  snackbar: snackbarReducer,
  surveys: SurveysReducer,
  survey: SurveyReducer,
  surveyView: SurveyViewReducer,
  payments: PaymentsReducer
});

export default allReducers;
