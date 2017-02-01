export default function reducer(state={
  dashboardMessages: [],
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_DASHBOARD_MESSAGES": {
        return {...state, fetching: true, fetched:false}
      }
      case "FETCH_DASHBOARD_MESSAGES_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          dashboardMessages: action.payload,
        }
      }
      case "FETCH_DASHBOARD_MESSAGES_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
    }
    return state
}
