export default function reducer(state={
  elibraryDetails: {
    details: [],
    fetching: false,
    fetched: false,
    error: null
  },
  }, action) {
    switch (action.type) {
      case "FETCH_ELIBRARY_DETAILS": {
        return {...state, elibraryDetails: {fetching: true, fetched: false}}
      }
      case "FETCH_ELIBRARY_DETAILS_REJECTED": {
        return {...state, elibraryDetails: {fetching: false, error: action.payload}}
      }
      case "FETCH_ELIBRARY_DETAILS_FULFILLED": {
        return {
          ...state,
          elibraryDetails: {
            fetching: false,
            fetched: true,
            details: action.payload.item
          }
        }
      }
    }
    return state
}
