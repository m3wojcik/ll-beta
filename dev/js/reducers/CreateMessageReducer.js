export default function reducer(state={
  addressBook: [],
  message: null,
  fetching: false,
  fetched: false,
  reply : false,
  forward : false,
  delete : false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_ADDRESS_BOOK": {
        return {...state, fetching: true, fetched: false}
      }
      case "FETCH_ADDRESS_BOOK_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_ADDRESS_BOOK_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          addressBook: action.payload
        }
      }
      case "UPDATE_RECEIVERS": {
        return {...state, receivers: action.payload}
      }
      case "UPDATE_FILTRED_RECEIVERS": {
        return {...state, filtredReceivers: action.payload}
      }
      case "CREATE_NEW_MESSAGE_BTN_CLICK": {
        return {...state, reply: false, forward: false}
      }
      case "REPLY_MESSAGE_BTN_CLICK": {
        return {...state, reply: true, forward: false, fetched: false, message: action.payload}
      }
      case "FORWARD_MESSAGE_BTN_CLICK": {
        return {...state, reply: false, forward: true, fetched: false, message: action.payload}
      }
      case "DELETE_MESSAGE_BTN_CLICK": {
        return {...state, delete: true, message: action.payload}
      }
    }
    return state
}
