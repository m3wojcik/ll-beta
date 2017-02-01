export default function reducer(state={
  dashboardSurveys: [],
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_DASHBOARD_SURVEYS": {
        return {...state, fetching: true, fetched:false}
      }
      case "FETCH_DASHBOARD_SURVEYS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          dashboardSurveys: action.payload,
        }
      }
      case "FETCH_DASHBOARD_SURVEYS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
    }
    return state
}
