import {instance} from './config'

export function fetchDashboardElibrary() {
  return function(dispatch) {
    dispatch({type: "FETCH_DASHBOARD_ELIBRARY", payload: true});
    instance.get("?q=getElibraryDashboard")
      .then((response) => {
        dispatch({type: "FETCH_DASHBOARD_ELIBRARY_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_DASHBOARD_ELIBRARY_REJECTED", payload: err})
      })
  }
}
