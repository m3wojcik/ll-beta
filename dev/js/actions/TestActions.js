import axios from "axios";

export function fetchTest(testId) {
  return function(dispatch) {
    dispatch({type: "FETCH_TEST", payload: null});
    axios.get("http://api.local/?q=getTest")
      .then((response) => {
        dispatch({type: "FETCH_TEST_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_TEST_REJECTED", payload: err})
      })
  }
}
