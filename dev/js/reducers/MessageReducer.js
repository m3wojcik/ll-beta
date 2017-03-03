export default function reducer(state={
  message: null,
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_MESSAGE": {
        return {...state, fetching: true, fetched: false}
      }
      case "FETCH_MESSAGE_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_MESSAGE_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          message: action.payload,
        }
      }
    }
    return state
}
