import axios from "axios";

export function fetchDashboardMarks() {
  return function(dispatch) {
    dispatch({type: "FETCH_DASHBOARD_MARKS", payload: true});
    axios.get("http://api.local/?q=getMarksDashboard")
      .then((response) => {
        dispatch({type: "FETCH_DASHBOARD_MARKS_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_DASHBOARD_MARKS_REJECTED", payload: err})
      })
  }
}
