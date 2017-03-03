export default function reducer(state={
  loginHistory: {},
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_LOGIN_HISTORY": {
        return {...state, fetching: true, fetched: false}
      }
      case "FETCH_LOGIN_HISTORY_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_LOGIN_HISTORY_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          loginHistory: action.payload,
        }
      }
    }
    return state
}
