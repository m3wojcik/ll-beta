import axios from "axios";

export function fetchAddressBook() {
  return function(dispatch) {
    axios.get("http://api.local/?q=getAddressBook")
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
