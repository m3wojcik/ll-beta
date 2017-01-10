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
  tests: TestsReducer
});

export default allReducers;
