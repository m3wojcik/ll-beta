import axios from "axios";

export function fetchDashboardPayments() {
  return function(dispatch) {
    dispatch({type: "FETCH_DASHBOARD_PAYMENTS", payload: true});
    axios.get("http://api.local/?q=getPaymentsDashboard")
      .then((response) => {
        dispatch({type: "FETCH_DASHBOARD_PAYMENTS_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_DASHBOARD_PAYMENTS_REJECTED", payload: err})
      })
  }
}
