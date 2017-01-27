export default function reducer(state={
  dashboardClasses: [],
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_DASHBOARD_CLASSES": {
        return {...state, fetching: true, fetched:false}
      }
      case "FETCH_DASHBOARD_CLASSES_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          dashboardClasses: action.payload,
        }
      }
      case "FETCH_DASHBOARD_CLASSES_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
    }
    return state
}
