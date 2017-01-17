export default function reducer(state={
  elibraryList: [],
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_ELIBRARY_LIST_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_ELIBRARY_LIST_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          elibraryList: action.payload,
        }
      }
    }
    return state
}
