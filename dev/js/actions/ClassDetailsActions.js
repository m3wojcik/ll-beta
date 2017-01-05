import axios from "axios";
import { setAppHeader } from './AppActions';

export function fetchClassDetails(classId, callBack) {
  return function(dispatch) {
    axios.get("http://api.local/?q=getClassDetails")
      .then((response) => {
        dispatch({type: "FETCH_UPCOMING_CLASS_DETAILS_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_UPCOMING_CLASS_DETAILS_REJECTED", payload: err})
      })
  }
}
