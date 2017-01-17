export default function reducer(state={
  test: null,
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_VIEW_TEST": {
        return {...state, fetching: true, fetched:false}
      }
      case "FETCH_VIEW_TEST_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_VIEW_TEST_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          test: action.payload
        }
      }
    }
    return state
}
