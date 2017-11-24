import axios from "axios";

export const instance = axios.create({
  //baseURL: 'https://test.langlion.com/api'
  baseURL: 'http://api.local/'
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
  {id: 0, src: "http://langlion.www/wp-content/uploads/test.png"},
  {id: 1, src: "http://langlion.www/wp-content/uploads/av01.png"},
  {id: 2, src: "http://langlion.www/wp-content/uploads/av02.png"},
  {id: 3, src: "http://langlion.www/wp-content/uploads/av03.png"},
  {id: 4, src: "http://langlion.www/wp-content/uploads/av04.png"}
]
