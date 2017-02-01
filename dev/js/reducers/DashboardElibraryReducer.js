export default function reducer(state={
  dashboardElibrary: [],
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_DASHBOARD_ELIBRARY": {
        return {...state, fetching: true, fetched:false}
      }
      case "FETCH_DASHBOARD_ELIBRARY_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          dashboardElibrary: action.payload,
        }
      }
      case "FETCH_DASHBOARD_ELIBRARY_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
    }
    return state
}
