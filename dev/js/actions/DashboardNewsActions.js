import axios from "axios";

export function fetchDashboardNews() {
  return function(dispatch) {
    dispatch({type: "FETCH_DASHBOARD_NEWS", payload: true});
    axios.get("http://api.local/?q=getNewsDashboard")
      .then((response) => {
        dispatch({type: "FETCH_DASHBOARD_NEWS_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_DASHBOARD_NEWS_REJECTED", payload: err})
      })
  }
}
