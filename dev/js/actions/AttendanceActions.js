import axios from "axios";

export function fetchAttendance() {
  return function(dispatch) {
    axios.get("http://api.local/?q=getAttendance")
      .then((response) => {
        dispatch({type: "FETCH_ATTENDANCE_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_ATTENDANCE_REJECTED", payload: err})
      })
  }
}
