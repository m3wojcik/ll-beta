import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import AppReducer from './AppReducer';
import DashboardClassesReducer from './DashboardClassesReducer';
import ClassesReducer from './ClassesReducer';
import MarksReducer from './MarksReducer';
import AttendanceReducer from './AttendanceReducer';
import InboxReducer from './InboxReducer';
import MessageReducer from './MessageReducer';
import CreateMessageReducer from './CreateMessageReducer';
import FilesReducer from './FilesReducer';

const allReducers = combineReducers({
  routing: routerReducer,
  app: AppReducer,
  dashboardClasses: DashboardClassesReducer,
  classes: ClassesReducer,
  marks: MarksReducer,
  attendance: AttendanceReducer,
  inbox: InboxReducer,
  message: MessageReducer,
  createMessage: CreateMessageReducer,
  files: FilesReducer
});

export default allReducers;
