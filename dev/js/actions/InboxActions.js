import {instance} from './config'

export function fetchInboxMessages(callBack) {
  return function(dispatch) {
      dispatch({type: "FETCH_INBOX_MESSAGES", payload: true});
    instance.get("?q=getInboxMessages")
      .then((response) => {
        dispatch({type: "FETCH_INBOX_MESSAGES_FULFILLED", payload: response.data});
        callBack();
      })
      .catch((err) => {
        dispatch({type: "FETCH_INBOX_MESSAGES_REJECTED", payload: err})
      })
  }
}
