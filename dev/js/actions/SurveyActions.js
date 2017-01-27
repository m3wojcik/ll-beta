import axios from "axios";

export function fetchSurvey(testId) {
  return function(dispatch) {
    dispatch({type: "FETCH_SURVEY", payload: null});
    axios.get("http://api.local/?q=getSurvey")
      .then((response) => {
        dispatch({type: "FETCH_SURVEY_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_SURVEY_REJECTED", payload: err})
      })
  }
}
