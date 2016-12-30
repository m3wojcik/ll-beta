import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import AppReducer from './AppReducer';
import ClassesReducer from './ClassesReducer';
import MarksReducer from './MarksReducer';
import AttendanceReducer from './AttendanceReducer';
import InboxReducer from './InboxReducer';
import MessageReducer from './MessageReducer';
import CreateMessageReducer from './CreateMessageReducer';

const allReducers = combineReducers({
  routing: routerReducer,
  app: AppReducer,
  classes: ClassesReducer,
  marks: MarksReducer,
  attendance: AttendanceReducer,
  inbox: InboxReducer,
  message: MessageReducer,
  createMessage: CreateMessageReducer
});

export default allReducers;
