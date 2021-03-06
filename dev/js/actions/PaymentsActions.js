// import axios from "axios";

// export function fetchInvoices() {
//   return function(dispatch) {
//     dispatch({type: "FETCH_INVOICES", payload: null});
//     axios.get("http://api.local/?q=getInvoices")
//       .then((response) => {
//         dispatch({type: "FETCH_INVOICES_FULFILLED", payload: response.data});
//       })
//       .catch((err) => {
//         dispatch({type: "FETCH_INVOICES_REJECTED", payload: err})
//       })
//   }
// }
import { CALL_API } from '../middleware/api'

export function fetchPayments() {
  return {
    [CALL_API]: {
      endpoint: '/studentPayment',
      types: ["FETCH_PAYMENTS", "FETCH_PAYMENTS_FULFILLED", "FETCH_PAYMENTS_REJECTED"],
      authenticated: true,
      method: 'get'
    }
  }
}
export function fetchInvoices() {
  return {
    [CALL_API]: {
      endpoint: '/invoices',
      types: ["FETCH_INVOICES", "FETCH_INVOICES_FULFILLED", "FETCH_INVOICES_REJECTED"],
      authenticated: true,
      method: 'get'
    }
  }
}
export function toggleInvoicesDialog(visible) {
  return {
    type: 'TOGGLE_INVOICES_DIALOG',
    payload: visible,
  }
}
