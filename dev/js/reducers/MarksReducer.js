export default function reducer(state={
  marks: [],
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_MARKS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_MARKS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          marks: action.payload,
        }
      }
    }
    return state
}
