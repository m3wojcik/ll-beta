import {instance} from './config'

export function fetchDashboardClasses() {
  return function(dispatch) {
    dispatch({type: "FETCH_DASHBOARD_CLASSES", payload: true});
    instance.get("?q=getClassesDashboard")
      .then((response) => {
        dispatch({type: "FETCH_DASHBOARD_CLASSES_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_DASHBOARD_CLASSES_REJECTED", payload: err})
      })
  }
}
