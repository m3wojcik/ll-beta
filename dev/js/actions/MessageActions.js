import {instance} from './config'

export function fetchMessage(messageId) {
  return function(dispatch) {
    dispatch({type: "FETCH_MESSAGE", payload: true});
    instance.get("?q=getMessage")
      .then((response) => {
        dispatch({type: "FETCH_MESSAGE_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_MESSAGE_REJECTED", payload: err})
      })
  }
}
