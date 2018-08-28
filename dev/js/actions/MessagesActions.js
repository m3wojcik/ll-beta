import { CALL_API } from '../middleware/api'

export function fetchInboxMessages() {
  return {
    [CALL_API]: {
      endpoint: '/messages',
      types: ["FETCH_INBOX_MESSAGES", "FETCH_INBOX_MESSAGES_FULFILLED", "FETCH_INBOX_MESSAGES_REJECTED"],
      authenticated: true,
      method: 'get'
    }
  }
}

export function fetchSendMessages() {
  return {
    [CALL_API]: {
      endpoint: '/messages',
      types: ["FETCH_SENT_MESSAGES", "FETCH_SENT_MESSAGES_FULFILLED", "FETCH_SENT_MESSAGES_REJECTED"],
      authenticated: true,
      method: 'get',
      params: {"mailbox": "sent"}
    }
  }
}

export function fetchTrashMessages() {
  return {
    [CALL_API]: {
      endpoint: '/messages',
      types: ["FETCH_TRASH_MESSAGES", "FETCH_TRASH_MESSAGES_FULFILLED", "FETCH_TRASH_MESSAGES_REJECTED"],
      authenticated: true,
      method: 'get',
      params: {"mailbox": "trash"}
    }
  }
}

export function fetchMessage(params) {
  return {
    [CALL_API]: {
      endpoint: '/message',
      types: ["FETCH_MESSAGE", "FETCH_MESSAGE_FULFILLED", "FETCH_MESSAGE_REJECTED"],
      authenticated: true,
      method: 'get',
      params: {...params}
    }
  }
}
export function deleteMessage(params) {
  return {
    [CALL_API]: {
      endpoint: '/deleteMessage',
      types: ["DELETE_MESSAGE", "DELETE_MESSAGE_FULFILLED", "DELETE_MESSAGE_REJECTED"],
      authenticated: true,
      method: 'get',
      params: {...params}
    }
  }
}
export function restoreMessage(params) {
  return {
    [CALL_API]: {
      endpoint: '/restoreMessage',
      types: ["RESTORE_MESSAGE", "RESTORE_MESSAGE_FULFILLED", "RESTORE_MESSAGE_REJECTED"],
      authenticated: true,
      method: 'get',
      params: {...params}
    }
  }
}
export function fetchAddressBook() {
  return {
    [CALL_API]: {
      endpoint: '/addressBook',
      types: ["FETCH_ADDRESS_BOOK", "FETCH_ADDRESS_BOOK_FULFILLED", "FETCH_ADDRESS_BOOK_REJECTED"],
      authenticated: true,
      method: 'get'
    }
  }
}

import {instance} from './config'
// export function fetchAddressBook() {
//   return function(dispatch) {
//       dispatch({type: "FETCH_ADDRESS_BOOK", payload: true});
//     instance.get("?q=getAddressBook2")
//       .then((response) => {
//         dispatch({type: "FETCH_ADDRESS_BOOK_FULFILLED", payload: response.data});
//       })
//       .catch((err) => {
//         dispatch({type: "FETCH_ADDRESS_BOOK_REJECTED", payload: err})
//       })
//   }
// }
// export function sendMessage(params) {
//   return function(dispatch) {
//       dispatch({type: "SEND_MESSAGE", payload: true});
//       instance.get("?q=sendMessage&"+"params="+params)
//       .then((response) => {
//         console.log("send", params);
//         dispatch({type: "SEND_MESSAGE_FULFILLED", payload: response.data});
//       })
//       .catch((err) => {
//         dispatch({type: "SEND_MESSAGE_REJECTED", payload: err})
//       })
//   }
// }
export function sendMessage(params) {
  return {
    [CALL_API]: {
      endpoint: '/sendMessage',
      types: ["SEND_MESSAGE", "SEND_MESSAGE_FULFILLED", "SEND_MESSAGE_REJECTED"],
      authenticated: true,
      method: 'get',
      params: {...params}
    }
  }
}
export function replayBtnClick() {
  return {type: "REPLAY_BTN_CLICK", payload: null};
}
export function forwardBtnClick() {
  return {type: "FORWARD_BTN_CLICK", payload: null};
}
export function createNewMessageBtnClick() {
  return {type: "CREATE_NEW_MESSAGE_BTN_CLICK", payload: null};
}
export function searchAddressBook(search) {
  return {type: "SEARCH_ADDRESS_BOOK", payload: search};
}
export function toggleAddressBook(open) {
  return {type: "TOGGLE_ADDRESS_BOOK", payload: open};
}
export function addReceivers(receivers) {
  return {type: "ADD_RECEIVERS", payload: receivers};
}
export function removeReceivers(receivers) {
  return {type: "REMOVE_RECEIVERS", payload: receivers};
}
export function setMessageSubject(subject) {
  return {type: "SET_MESSAGE_SUBJECT", payload: subject};
}
export function setMessageText(text) {
  return {type: "SET_MESSAGE_TEXT", payload: text};
}
export function replayMessage(params) {
  return {type: "REPLAY_MESSAGE", payload: params};
}