export default function reducer(state={
  dashboardClasses: [],
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_UPCOMING_DASHBOARD_CLASSES_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_UPCOMING_DASHBOARD_CLASSES_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          dashboardClasses: action.payload,
        }
      }
    }
    return state
}
