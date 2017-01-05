import axios from "axios";

export function fetchUpcomingClasses(callBack) {
  return function(dispatch) {
    axios.get("http://api.local/?q=getUpcomingClasses")
      .then((response) => {
        dispatch({type: "FETCH_UPCOMING_DASHBOARD_CLASSES_FULFILLED", payload: response.data});
        callBack();
      })
      .catch((err) => {
        dispatch({type: "FETCH_UPCOMING_DASHBOARD_CLASSES_REJECTED", payload: err})
      })
  }
}
