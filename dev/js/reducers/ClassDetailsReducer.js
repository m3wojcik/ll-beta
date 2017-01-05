export default function reducer(state={
  classDetails: null,
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_UPCOMING_CLASS_DETAILS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_UPCOMING_CLASS_DETAILS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          classDetails: action.payload,
        }
      }
    }
    return state
}
