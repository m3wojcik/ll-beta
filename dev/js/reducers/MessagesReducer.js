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
  singleMessages:{},
  deleteMessage:{
    fetching: false,
    fetched: false,
    restored: false,
    restoring: false,
    error: null,
  },
  createMessage: {
    subject: "",
    text: "",
    fetching: false,
    fetched: false,
    reply : false,
    forward : false,
    delete : false,
    error: null
  },
  addressBook:{
    fetching: false,
    fetched: false,
    open: false,
    search: "",
    treeBook:[],
    flatBook:{},
    receivers:[]
  },
  sendMessage:{
    receivers: [],
    message: null,
    fetching: false,
    fetched: false,
    error: null
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
            inboxMessages: action.payload.messages
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
            sentMessages: action.payload.messages
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
            trashMessages: action.payload.messages
          }
        }
      }
      case "FETCH_MESSAGE": {
          let tmpMessages = Object.assign({}, state.singleMessages);
          tmpMessages[action.payload.id] = {fetching: true, fetched: false}
          return {...state,
            singleMessages: tmpMessages
          }
        }
        case "FETCH_MESSAGE_REJECTED": {
          return {...state, singleMessages: {...state.singleMessages, fetching: false, error: action.payload}}
        }
        case "FETCH_MESSAGE_FULFILLED": {
          let tmpMessages = Object.assign({}, state.singleMessages);
          tmpMessages[action.payload.id] = {fetching: false, fetched: true, ...action.payload}
          return {...state,
            singleMessages: tmpMessages
          }
        }

      case "DELETE_MESSAGE": {
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
        if(state.singleMessage.mailbox !="trash"){
          return {
            ...state,
            deleteMessage: {
              ...state.deleteMessage,
              restored: true,
              restoring: false
            },
            inbox: {...state.inbox,
              inboxMessages: action.payload.messages
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
              trashMessages: action.payload.messages
            }
          }
        }
      }
      case "FETCH_ADDRESS_BOOK": {
        return {...state,
          addressBook: {
            ...state.addressBook,
            fetching: true,
            fetched: false
          } 
        }
      }
      case "FETCH_ADDRESS_BOOK_REJECTED": {
        return {...state,
          addressBook: {
            ...state.addressBook,
            fetching: false,
            fetched: false,
            error: action.payload
          } 
        }
      }
      case "FETCH_ADDRESS_BOOK_FULFILLED": {
        let flatBook = {}
        const flatTree = (node, parentPath) =>{
          node.forEach(function(element,cnt) {
            let path = parentPath === null ? [] : parentPath.slice()
            path.push(cnt)
            element.path = path
            if(element.contacts){
              flatBook[element.label] = element 
              flatTree(element.contacts, path)
            }
            else flatBook[element.id] = element 
          }.bind(this))
        }
        flatTree(action.payload, null)
        return {
          ...state,
          addressBook: {
            ...state.addressBook,
            fetching: false,
            fetched: true,
            treeBook: action.payload[0].contacts,
            flatBook: flatBook
          }
        }
      }
      case "SEARCH_ADDRESS_BOOK": {
        return {...state,
          addressBook: {
            ...state.addressBook,
            search: action.payload
          }
        }
      }
      case "TOGGLE_ADDRESS_BOOK": {
        return {...state,
          addressBook: {
            ...state.addressBook,
            open: action.payload
          }
        }
      }
      case "ADD_RECEIVERS": {
        let tmpReceivers = state.addressBook.receivers.slice()
      
        if(typeof(action.payload) === 'number') {
          tmpReceivers.push(action.payload)
        }
        else{
          tmpReceivers = [...new Set([...state.addressBook.receivers, ...action.payload])]
        }
        return {...state,
          addressBook: {
            ...state.addressBook,
            receivers: tmpReceivers
          }
        }
      }
      case "REMOVE_RECEIVERS": { 
        //debugger
        let tmp = state.addressBook.receivers.slice() 
        if(typeof(action.payload) === 'number') {
          tmp = tmp.filter(x => x !== action.payload)
        }
        else{
          tmp = tmp.filter(x => action.payload.indexOf(x) == -1)
        }
        return {...state,
          addressBook: {
            ...state.addressBook,
            receivers: tmp
          }
        }
      }
      case "SET_MESSAGE_SUBJECT": {
        return {...state,
          createMessage: {
            ...state.createMessage,
            subject: action.payload
          }
        }
      }
      case "SET_MESSAGE_TEXT": {
        return {...state,
          createMessage: {
            ...state.createMessage,
            text: action.payload 
          }
        }
      }
      case "REPLAY_MESSAGE": {
        return {...state,
          createMessage: {
            ...state.createMessage,
            subject: "Re: "+ action.payload.subject,
            text: action.payload.text 
          },
          addressBook: {
            ...state.addressBook,
            receivers: [action.payload.senderId]
          }
        }
      }
      case "SEND_MESSAGE": {
        return {...state, sendMessage: {...state.sendMessage, fetching: true, fetched: false}}
      }
      case "SEND_MESSAGE_REJECTED": {
        return {...state, sendMessage: {...state.sendMessage, fetching: false, error: action.payload}}
      }
      case "SEND_MESSAGE_FULFILLED": {
        return {
          ...state,
          sendMessage: {
            ...state.sendMessage,
            receivers:[],
            fetching: false,
            fetched: true,
            message: action.payload
          }
        }
      }
    }
    return state
}
