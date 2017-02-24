export default function reducer(state={
  classes: [],
  classDetails: null,
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_CLASSES": {
        return {...state, fetching: true, fetched: false}
      }
      case "FETCH_CLASSES_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_CLASSES_FULFILLED": {
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
