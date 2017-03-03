import {instance} from './config'
export function fetchDashboardSurveys() {
  return function(dispatch) {
    dispatch({type: "FETCH_DASHBOARD_SURVEYS", payload: true});
    instance.get("?q=getSurveysDashboard")
      .then((response) => {
        dispatch({type: "FETCH_DASHBOARD_SURVEYS_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_DASHBOARD_SURVEYS_REJECTED", payload: err})
      })
  }
}
