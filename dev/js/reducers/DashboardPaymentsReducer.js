export default function reducer(state={
  groups: [],
  totalAmount: null,
  amountPaid: null,
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_DASHBOARD_PAYMENTS": {
        return {...state, fetching: true, fetched:false}
      }
      case "FETCH_DASHBOARD_PAYMENTS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          groups: action.payload.groups,
          totalAmount: action.payload.totalAmount,
          amountPaid: action.payload.amountPaid
        }
      }
      case "FETCH_DASHBOARD_PAYMENTS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
    }
    return state
}
