import axios from "axios";

export function fetchDashboardTests() {
  return function(dispatch) {
    dispatch({type: "FETCH_DASHBOARD_TESTS", payload: true});
    axios.get("http://api.local/?q=getTestsDashboard")
      .then((response) => {
        dispatch({type: "FETCH_DASHBOARD_TESTS_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_DASHBOARD_TESTS_REJECTED", payload: err})
      })
  }
}
