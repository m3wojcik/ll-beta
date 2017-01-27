export default function reducer(state={
  survey: null,
  userAnswers: null,
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_SURVEY": {
        return {...state, fetching: true, fetched:false}
      }
      case "FETCH_SURVEY_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_SURVEY_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          survey: action.payload,
          userAnswers: []
        }
      }
    }
    return state
}
