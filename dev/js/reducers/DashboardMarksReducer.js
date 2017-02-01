export default function reducer(state={
  dashboardMarks: [],
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_DASHBOARD_MARKS": {
        return {...state, fetching: true, fetched:false}
      }
      case "FETCH_DASHBOARD_MARKS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          dashboardMarks: action.payload,
        }
      }
      case "FETCH_DASHBOARD_MARKS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
    }
    return state
}
