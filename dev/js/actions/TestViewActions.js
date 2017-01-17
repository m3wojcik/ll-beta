import axios from "axios";

export function fetchViewTest(testId) {
  return function(dispatch) {
    dispatch({type: "FETCH_VIEW_TEST", payload: null});
    axios.get("http://api.local/?q=viewTest")
      .then((response) => {
        dispatch({type: "FETCH_VIEW_TEST_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_VIEW_TEST_REJECTED", payload: err})
      })
  }
}
