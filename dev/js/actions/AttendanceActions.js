import {instance} from './config'

export function fetchAttendance() {
  return function(dispatch) {
    dispatch({type: "FETCH_ATTENDANCE", payload: true});
    instance.get("?q=getAttendance")
      .then((response) => {
        dispatch({type: "FETCH_ATTENDANCE_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_ATTENDANCE_REJECTED", payload: err})
      })
  }
}
