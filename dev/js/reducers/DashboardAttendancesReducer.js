export default function reducer(state={
  dashboardAttendances: [],
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_DASHBOARD_ATTENDANCES": {
        return {...state, fetching: true, fetched:false}
      }
      case "FETCH_DASHBOARD_ATTENDANCES_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          dashboardAttendances: action.payload,
        }
      }
      case "FETCH_DASHBOARD_ATTENDANCES_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
    }
    return state
}
