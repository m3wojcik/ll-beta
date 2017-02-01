import axios from "axios";

export function fetchDashboardElibrary() {
  return function(dispatch) {
    dispatch({type: "FETCH_DASHBOARD_ELIBRARY", payload: true});
    axios.get("http://api.local/?q=getElibraryDashboard")
      .then((response) => {
        dispatch({type: "FETCH_DASHBOARD_ELIBRARY_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_DASHBOARD_ELIBRARY_REJECTED", payload: err})
      })
  }
}
