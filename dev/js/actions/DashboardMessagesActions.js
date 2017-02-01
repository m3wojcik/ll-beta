import axios from "axios";

export function fetchDashboardMessages() {
  return function(dispatch) {
    dispatch({type: "FETCH_DASHBOARD_MESSAGES", payload: true});
    axios.get("http://api.local/?q=getMessagesDashboard")
      .then((response) => {
        dispatch({type: "FETCH_DASHBOARD_MESSAGES_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_DASHBOARD_MESSAGES_REJECTED", payload: err})
      })
  }
}
