import axios from "axios";
import {BASE_URL, INSTANCE_URL} from "../middleware/api"
import av1 from '../../img/avatars/av01.png'
import av2 from '../../img/avatars/av02.png'
import av3 from '../../img/avatars/av03.png'
import av4 from '../../img/avatars/av04.png'

export const instance = axios.create({
  baseURL: BASE_URL
  //baseURL: 'http://api.local/'
});
export const errorMessage = {
  "invalid_request": "Invalid user or password",
  "invalid_grant": "Invalid user or password"
}
export const groupStatus = {
  "attendance_checked": {"label": "Attendance checked", "class": "label-green"},
  "homework_checked": {"label": "Homework checked", "class": "label-olive"},
  "lesson_object_added": {"label": "Filled in", "class": "label-teal"},
  "online": {"label": "Online lesson", "class": "label-blue"},
  "files_added": {"label": "Files added", "class": "label-blue"},
  "tests_added": {"label": "Tests added", "class": "label-blue"},
}
export const toolbarHeaders = {
  "dashobard": "DASHBOARD",
  "marks": "MARKS",
  "classes": "CLASSES",
  "attendance": "ATTENDANCE",
  "messages": "MESSAGES",
  "message": "MESSAGE",
  "files": "FILES",
  "tests": "TESTS",
  "test": "TEST",
  "elibrary":"ELIBRARY",
  "surveys": "SURVEYS",
  "survey": "SURVEY",
  "payments": "PAYMENTS",
  "profile": "PROFILE",
  "settings": "SETTINGS",
  "editProfile": "EDIT_PROFILE",
  "changePassword": "CHANGE_PASWORD",
  "loginHistory": "LOGIN_HISTORY",
  "studentHistory": "STUDENT_HISTORY",
  "inbox": "INBOX",
  "sent": "SENT",
  "trash": "TRASH",
  "createMessage": "CREATE_MESSAGE"

}
export const avatars = [
  {id: 1, src: av1},
  {id: 2, src: av2},
  {id: 3, src: av3},
  {id: 4, src: av4},
]
