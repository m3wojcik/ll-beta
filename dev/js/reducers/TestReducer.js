export default function reducer(state={
  test: null,
  userAnswers: {},
  sendTest:{
    resposne: {},
    sending: false,
    send: false,
    error: null,
  },
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_TEST": {
        return {...state, fetching: true, fetched:false}
      }
      case "FETCH_TEST_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_TEST_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          test: action.payload.test,
          pages: action.payload.pages,
          userAnswers: {}
        }
      }

      case "SEND_TEST": {
        return {...state, sendTest:{sending: true, send:false}}
      }
      case "SEND_TEST_REJECTED": {
        return {...state, sendTest:{...state.sendTest, sending: false, error: action.payload}}
      }
      case "SEND_TEST_FULFILLED": {
        return {
          ...state,
          sendTest:{
            ...state.sendTest, 
            sending: false, 
            send: true,
            resposne: action.payload
          }
        }
      }

      case "ADD_TEST_ANSWER": {
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
