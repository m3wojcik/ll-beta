import axios from "axios";

export function fetchMarks() {
  return function(dispatch) {
    axios.get("http://api.local/?q=getMarks")
      .then((response) => {
        dispatch({type: "FETCH_MARKS_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_MARKS_REJECTED", payload: err})
      })
  }
}
