export default function reducer(state={
  survey: null,
  surveyAttempts: null,
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_VIEW_SURVEY": {
        return {...state, fetching: true, fetched:false}
      }
      case "FETCH_VIEW_SURVEY_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_VIEW_SURVEY_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          survey: action.payload.survey,
          surveyAttempts: action.payload.survey_attempts
        }
      }
    }
    return state
}
