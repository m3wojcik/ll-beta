import axios from "axios";

export function fetchViewSurvey(surveyId) {
  return function(dispatch) {
    dispatch({type: "FETCH_VIEW_SURVEY", payload: null});
    axios.get("http://api.local/?q=viewSurvey")
      .then((response) => {
        dispatch({type: "FETCH_VIEW_SURVEY_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_VIEW_SURVEY_REJECTED", payload: err})
      })
  }
}
