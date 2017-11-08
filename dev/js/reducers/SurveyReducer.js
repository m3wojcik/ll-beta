export default function reducer(state={
  survey: null,
  userAnswers: null,
  sendSurvey:{
    resposne: {},
    saving: false,
    saved: false,
    error: null,
  },
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
          userAnswers: {}
        }
      }

      case "SEND_SURVEY": {
        return {...state, sendSurvey:{saving: true, saved:false}}
      }
      case "SEND_SURVEY_REJECTED": {
        return {...state, sendSurvey:{...state.sendSurvey, saving: false, error: action.payload}}
      }
      case "SEND_SURVEY_FULFILLED": {
        return {
          ...state,
          sendSurvey:{
            ...state.sendSurvey, 
            saving: false, 
            saved: true,
            resposne: action.payload
          }
        }
      }

      case "ADD_SURVEY_ANSWER": {
        let newUserAnswers = Object.assign({}, state.userAnswers)
        newUserAnswers[action.payload.questionId] = {...action.payload.data}
        return {
          ...state,
          userAnswers: newUserAnswers
        }
      }
    }
    return state
}
