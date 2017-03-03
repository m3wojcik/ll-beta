import {instance} from './config'

export function fetchDashboardMessages() {
  return function(dispatch) {
    dispatch({type: "FETCH_DASHBOARD_MESSAGES", payload: true});
    instance.get("?q=getMessagesDashboard")
      .then((response) => {
        dispatch({type: "FETCH_DASHBOARD_MESSAGES_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_DASHBOARD_MESSAGES_REJECTED", payload: err})
      })
  }
}
