import axios from "axios";

export function fetchInboxMessages(callBack) {
  return function(dispatch) {
    axios.get("http://api.local/?q=getInboxMessages")
      .then((response) => {
        dispatch({type: "FETCH_INBOX_MESSAGES_FULFILLED", payload: response.data});
        callBack();
      })
      .catch((err) => {
        dispatch({type: "FETCH_INBOX_MESSAGES_REJECTED", payload: err})
      })
  }
}
