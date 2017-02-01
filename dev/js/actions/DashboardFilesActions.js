import axios from "axios";

export function fetchDashboardFiles() {
  return function(dispatch) {
    dispatch({type: "FETCH_DASHBOARD_FILES", payload: true});
    axios.get("http://api.local/?q=getFiles")
      .then((response) => {
        dispatch({type: "FETCH_DASHBOARD_FILES_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_DASHBOARD_FILES_REJECTED", payload: err})
      })
  }
}
