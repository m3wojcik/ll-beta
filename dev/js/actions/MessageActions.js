import axios from "axios";

export function fetchMessage(messageId) {
  return function(dispatch) {
    axios.get("http://api.local/?q=getMessage")
      .then((response) => {
        dispatch({type: "FETCH_MESSAGE_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_MESSAGE_REJECTED", payload: err})
      })
  }
}
