export default function reducer(state={
  dashboardTests: [],
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_DASHBOARD_TESTS": {
        return {...state, fetching: true, fetched:false}
      }
      case "FETCH_DASHBOARD_TESTS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          dashboardTests: action.payload,
        }
      }
      case "FETCH_DASHBOARD_TESTS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
    }
    return state
}
