import {instance} from './config'

export function fetchDashboardNews() {
  return function(dispatch) {
    dispatch({type: "FETCH_DASHBOARD_NEWS", payload: true});
    instance.get("?q=getNewsDashboard")
      .then((response) => {
        dispatch({type: "FETCH_DASHBOARD_NEWS_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_DASHBOARD_NEWS_REJECTED", payload: err})
      })
  }
}
