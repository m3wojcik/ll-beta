import {instance} from './config'

export function fetchClasses(groupId) {
  console.log('fetchClasses',groupId);
  return function(dispatch) {
    dispatch({type: "FETCH_CLASSES", payload: groupId});
    instance.get("?q=getClasses")
      .then((response) => {
        dispatch({type: "FETCH_CLASSES_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_CLASSES_REJECTED", payload: err})
      })
  }
}
