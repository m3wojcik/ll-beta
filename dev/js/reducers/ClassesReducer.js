export default function reducer(state={
  classes: [],
  classDetails: null,
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_UPCOMING_CLASSES": {
        return {...state, fetching: true}
      }
      case "FETCH_UPCOMING_CLASSES_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_UPCOMING_CLASSES_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          classes: action.payload,
        }
      }
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
