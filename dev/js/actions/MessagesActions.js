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