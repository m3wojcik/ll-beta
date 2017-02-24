import axios from "axios";

export function fetchClasses(groupId) {
  console.log('fetchClasses',groupId);
  return function(dispatch) {
    dispatch({type: "FETCH_CLASSES", payload: groupId});
    axios.get("http://api.local/?q=getClasses")
      .then((response) => {
        dispatch({type: "FETCH_CLASSES_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_CLASSES_REJECTED", payload: err})
      })
  }
}
