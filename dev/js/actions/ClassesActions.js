import axios from "axios";
import { setAppHeader } from './AppActions';

export function fetchUpcomingClasses(callBack) {
  return function(dispatch) {
    axios.get("http://api.local/?q=getUpcomingClasses")
      .then((response) => {
        dispatch({type: "FETCH_UPCOMING_CLASSES_FULFILLED", payload: response.data});
        callBack();
      })
      .catch((err) => {
        dispatch({type: "FETCH_UPCOMING_CLASSES_REJECTED", payload: err})
      })
  }
}
export function fetchClassDetails(classId, callBack) {
  return function(dispatch) {
    axios.get("http://api.local/?q=getClassDetails")
      .then((response) => {
        dispatch({type: "FETCH_UPCOMING_CLASS_DETAILS_FULFILLED", payload: response.data});
        dispatch(setAppHeader('Details: ' + response.data.name));
      })
      .catch((err) => {
        dispatch({type: "FETCH_UPCOMING_CLASS_DETAILS_REJECTED", payload: err})
      })
  }
}
