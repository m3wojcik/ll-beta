import axios from "axios";

export function fetchAddressBook(callBack) {
  return function(dispatch) {
    axios.get("http://api.local/?q=getAddressBook")
      .then((response) => {
        dispatch({type: "FETCH_ADDRESS_BOOK_FULFILLED", payload: response.data});
        callBack();
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
export function createNewMessageBtnClick() {
    return {type: "CREATE_NEW_MESSAGE_BTN_CLICK", payload: null};
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
