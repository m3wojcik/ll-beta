import axios from "axios";

export function fetchUpcomingClasses() {
  return function(dispatch) {
    axios.get("http://api.local/?q=getUpcomingClasses")
      .then((response) => {
        console.log('response',response.data);
        dispatch({type: "FETCH_UPCOMING_CLASSES_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_UPCOMING_CLASSES_REJECTED", payload: err})
      })
  }
}
