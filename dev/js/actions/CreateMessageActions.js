import {instance} from './config'
import { CALL_API } from '../middleware/api'

// export function fetchAddressBook() {
//   return {
//     [CALL_API]: {
//       endpoint: '/addressBook',
//       types: ["FETCH_ADDRESS_BOOK", "FETCH_ADDRESS_BOOK_FULFILLED", "FETCH_ADDRESS_BOOK_REJECTED"],
//       authenticated: true,
//       method: 'get'
//     }
//   }
// }

export function fetchAddressBook() {
  return function(dispatch) {
      dispatch({type: "FETCH_ADDRESS_BOOK", payload: true});
    instance.get("?q=getAddressBook2")
      .then((response) => {
        dispatch({type: "FETCH_ADDRESS_BOOK_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_ADDRESS_BOOK_REJECTED", payload: err})
      })
  }
}
export function updateReceivers(receivers) {
    return {type: "UPDATE_RECEIVERS", payload: receivers};
}
export function updateFiltredReceivers(receivers) {
    return{type: "UPDATE_FILTRED_RECEIVERS", payload: receivers};
}

export function replyMessageBtnClick(message) {
    return {type: "REPLY_MESSAGE_BTN_CLICK", payload: message};
}
export function forwardMessageBtnClick(message) {
    return {type: "FORWARD_MESSAGE_BTN_CLICK", payload: message};
}
export function deleteMessageBtnClick(message) {
    return {type: "DELETE_MESSAGE_BTN_CLICK", payload: message};
}
