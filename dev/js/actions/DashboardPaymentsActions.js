import {instance} from './config'

export function fetchDashboardPayments() {
  return function(dispatch) {
    dispatch({type: "FETCH_DASHBOARD_PAYMENTS", payload: true});
    instance.get("?q=getPaymentsDashboard")
      .then((response) => {
        dispatch({type: "FETCH_DASHBOARD_PAYMENTS_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_DASHBOARD_PAYMENTS_REJECTED", payload: err})
      })
  }
}
