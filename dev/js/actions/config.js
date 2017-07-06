import axios from "axios";

export const instance = axios.create({
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
export const avatars = [
  {id: 1, src: "http://langlion.com/pl/wp-content/uploads/2017/06/av01.png"},
  {id: 2, src: "http://langlion.com/pl/wp-content/uploads/2017/06/av02.png"},
  {id: 3, src: "http://langlion.com/pl/wp-content/uploads/2017/06/av03.png"},
  {id: 4, src: "http://langlion.com/pl/wp-content/uploads/2017/06/av04.png"}
]
