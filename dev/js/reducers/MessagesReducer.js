export default function reducer(state={
  inbox: {
    inboxMessages: [],
    fetching: false,
    fetched: false,
    error: null
  },
  sent:{
    sentMessages: [],
    fetching: false,
    fetched: false,
    error: null
  },
  trash:{
    trashMessages: [],
    fetching: false,
    fetched: false,
    error: null
  },
  singleMessage:{
    message: null,
    fetching: false,
    fetched: false,
    error: null
  },
  deleteMessage:{
    fetching: false,
    fetched: false,
    restored: false,
    restoring: false,
    error: null,
  }
  }, action) {

    switch (action.type) {
      case "FETCH_INBOX_MESSAGES": {
        return {...state, inbox: {...state.inbox, fetching: true, fetched: false}}
      }
      case "FETCH_INBOX_MESSAGES_REJECTED": {
        return {...state, inbox: {...state.inbox, fetching: false, error: action.payload}}
      }
      case "FETCH_INBOX_MESSAGES_FULFILLED": {
        return {
          ...state,
          inbox: {...state.inbox,
            fetching: false,
            fetched: true,
            inboxMessages: action.payload
          }
        }
      }
      case "FETCH_SENT_MESSAGES": {
        return {...state, sent: {...state.sent, fetching: true, fetched: false}}
      }
      case "FETCH_SENT_MESSAGES_REJECTED": {
        return {...state, sent: {...state.sent, fetching: false, error: action.payload}}
      }
      case "FETCH_SENT_MESSAGES_FULFILLED": {
        return {
          ...state,
          sent: {...state.sent,
            fetching: false,
            fetched: true,
            sentMessages: action.payload
          }
        }
      }
      case "FETCH_TRASH_MESSAGES": {
        return {...state, trash: {...state.trash, fetching: true, fetched: false}}
      }
      case "FETCH_TRASH_MESSAGES_REJECTED": {
        return {...state, trash: {...state.trash, fetching: false, error: action.payload}}
      }
      case "FETCH_TRASH_MESSAGES_FULFILLED": {
        return {
          ...state,
          trash: {...state.trash,
            fetching: false,
            fetched: true,
            trashMessages: action.payload
          }
        }
      }
      case "FETCH_MESSAGE": {
        return {...state,
          singleMessage: {...state.singleMessage, fetching: true, fetched: false},
          deleteMessage: {...state.deleteMessage, fetching: false, fetched: false}
        }
      }
      case "FETCH_MESSAGE_REJECTED": {
        return {...state, singleMessage: {...state.singleMessage, fetching: false, error: action.payload}}
      }
      case "FETCH_MESSAGE_FULFILLED": {
        return {
          ...state,
          singleMessage: {...state.singleMessage,
            fetching: false,
            fetched: true,
            message: action.payload,
          }
        }
      }
      case "DELETE_MESSAGE": {
        console.log('delete',action.payload);
        return {...state, deleteMessage: {...state.deleteMessage, id:action.payload.ids[0], fetching: true, fetched: false}}
      }
      case "DELETE_MESSAGE_REJECTED": {
        return {...state, deleteMessage: {...state.deleteMessage, fetching: false, error: action.payload}}
      }
      case "DELETE_MESSAGE_FULFILLED": {
        return {
          ...state,
          deleteMessage: {
            ...state.deleteMessage,
            fetching: false,
            fetched: true
          }
        }
      }
      case "RESTORE_MESSAGE": {
        return {...state,
          deleteMessage: {...state.deleteMessage, restored: false, restoring: true}
        }
      }
      case "RESTORE_MESSAGE_REJECTED": {
        return {...state, deleteMessage: {...state.deleteMessage, restored: false, error: action.payload}}
      }
      case "RESTORE_MESSAGE_FULFILLED": {
        if(state.singleMessage.message.mailbox !="trash"){
          return {
            ...state,
            deleteMessage: {
              ...state.deleteMessage,
              restored: true,
              restoring: false
            },
            inbox: {...state.inbox,
              inboxMessages: action.payload
            }
          }
        }else{
          return {
            ...state,
            deleteMessage: {
              ...state.deleteMessage,
              restored: true,
              restoring: false
            },
            trash: {...state.inbox,
              trashMessages: action.payload
            }
          }
        }

      }
    }
    return state
}