import {instance} from './config'

export function fetchDashboardTests() {
  return function(dispatch) {
    dispatch({type: "FETCH_DASHBOARD_TESTS", payload: true});
    instance.get("?q=getTestsDashboard")
      .then((response) => {
        dispatch({type: "FETCH_DASHBOARD_TESTS_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_DASHBOARD_TESTS_REJECTED", payload: err})
      })
  }
}
