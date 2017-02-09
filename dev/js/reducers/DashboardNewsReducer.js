export default function reducer(state={
  dashboardNews: [],
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_DASHBOARD_NEWS": {
        return {...state, fetching: true, fetched:false}
      }
      case "FETCH_DASHBOARD_NEWS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          dashboardNews: action.payload,
        }
      }
      case "FETCH_DASHBOARD_NEWS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
    }
    return state
}
