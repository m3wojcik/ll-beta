import axios from "axios";

export function fetchSurveys() {
  return function(dispatch) {
    dispatch({type: "FETCH_SURVEYS", payload: true});
    axios.get("http://api.local/?q=getSurveys")
      .then((response) => {
        dispatch({type: "FETCH_SURVEYS_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_SURVEYS_REJECTED", payload: err})
      })
  }
}
