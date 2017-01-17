export default function reducer(state={
  userData: {},
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_USER_DATA_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_USER_DATA_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          userData: action.payload,
        }
      }
      case "SET_USER_DATA": {
        return {...state, userData: action.payload}
      }
    }
    return state
}
