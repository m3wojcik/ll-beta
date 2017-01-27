export default function reducer(state={
  surveys: [],
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_SURVEYS": {
        return {...state, fetching: true, fetched:false}
      }
      case "FETCH_SURVEYS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_SURVEYS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          surveys: action.payload,
        }
      }
    }
    return state
}
