export default function reducer(state={
  groups: [],
  totalAmount: null,
  amountPaid: null,
  fetching: false,
  fetched: false,
  error: null,
  invoices:{
    invoices: [],
    fetching: false,
    fetched: false,
  },
  view:{
    dialogVisible: false
  }
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
          groups: action.payload.payments.groups,
          totalAmount: action.payload.payments.total,
          amountPaid: action.payload.payments.paid
        }
      }
      case "TOGGLE_INVOICES_DIALOG": {
        return {...state, view: {...state.view, dialogVisible: action.payload}}
      }
      case "FETCH_INVOICES": {
        return {...state, invoices: {...state.invoices, fetching: true, fetched:false}}
      }
      case "FETCH_INVOICES_REJECTED": {
        return {...state, invoices: {...state.invoices, fetching: false, error: action.payload}}
      }
      case "FETCH_INVOICES_FULFILLED": {
        return {
          ...state, 
          invoices: {
            ...state.invoices, 
            fetching: false, 
            fetched:true,
            invoices: action.payload
          }
        }
      }
    }
    return state
}
