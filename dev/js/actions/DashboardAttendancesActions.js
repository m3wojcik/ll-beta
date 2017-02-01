import axios from "axios";

export function fetchDashboardAttendances() {
  return function(dispatch) {
    dispatch({type: "FETCH_DASHBOARD_ATTENDANCES", payload: true});
    axios.get("http://api.local/?q=getAttendanceDashboard")
      .then((response) => {
        dispatch({type: "FETCH_DASHBOARD_ATTENDANCES_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_DASHBOARD_ATTENDANCES_REJECTED", payload: err})
      })
  }
}
