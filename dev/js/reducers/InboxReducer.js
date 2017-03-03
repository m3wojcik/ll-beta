export default function reducer(state={
  inboxMessages: [],
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_INBOX_MESSAGES": {
        return {...state, fetching: true, fetched: false}
      }
      case "FETCH_INBOX_MESSAGES_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_INBOX_MESSAGES_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          inboxMessages: action.payload,
        }
      }
    }
    return state
}
