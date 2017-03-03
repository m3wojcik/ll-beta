import {instance} from './config'

export function fetchClassDetails(classId, callBack) {
  return function(dispatch) {
    dispatch({type: "FETCH_UPCOMING_CLASS_DETAILS", payload: true});
    instance.get("?q=getClassDetails")
      .then((response) => {
        dispatch({type: "FETCH_UPCOMING_CLASS_DETAILS_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_UPCOMING_CLASS_DETAILS_REJECTED", payload: err})
      })
  }
}
