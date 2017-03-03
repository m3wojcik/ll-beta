import {instance} from './config'

export function fetchDashboardAttendances() {
  return function(dispatch) {
    dispatch({type: "FETCH_DASHBOARD_ATTENDANCES", payload: true});
    instance.get("?q=getAttendanceDashboard")
      .then((response) => {
        dispatch({type: "FETCH_DASHBOARD_ATTENDANCES_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_DASHBOARD_ATTENDANCES_REJECTED", payload: err})
      })
  }
}
