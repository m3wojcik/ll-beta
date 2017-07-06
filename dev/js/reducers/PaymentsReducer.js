export default function reducer(state={
  groups: [],
  totalAmount: null,
  amountPaid: null,
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_PAYMENTS": {
        return {...state, fetching: true, fetched:false}
      }
      case "FETCH_PAYMENTS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_PAYMENTS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          groups: action.payload.groups,
          totalAmount: action.payload.total,
          amountPaid: action.payload.paid
        }
      }
    }
    return state
}
