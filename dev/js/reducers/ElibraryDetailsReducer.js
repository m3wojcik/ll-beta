export default function reducer(state={
  elibraryDetails: [],
  fetching: false,
  fetched: false,
  error: null,
  }, action) {
    switch (action.type) {
      case "FETCH_ELIBRARY_DETAILS": {
        return {...state, fetching: true, fetched: false,}
      }
      case "FETCH_ELIBRARY_DETAILS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_ELIBRARY_DETAILS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          elibraryDetails: action.payload,
        }
      }
    }
    return state
}
