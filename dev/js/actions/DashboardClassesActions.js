import axios from "axios";

export function fetchDashboardClasses() {
  return function(dispatch) {
    dispatch({type: "FETCH_DASHBOARD_CLASSES", payload: true});
    axios.get("http://api.local/?q=getClassesDashboard")
      .then((response) => {
        dispatch({type: "FETCH_DASHBOARD_CLASSES_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_DASHBOARD_CLASSES_REJECTED", payload: err})
      })
  }
}
