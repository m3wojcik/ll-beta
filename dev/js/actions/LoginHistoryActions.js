import {instance} from './config'

export function fetchLoginHistory() {
  return function(dispatch) {
    dispatch({type: "FETCH_LOGIN_HISTORY", payload: true});  
    instance.get("?q=getLoginHistory")
      .then((response) => {
        dispatch({type: "FETCH_LOGIN_HISTORY_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_LOGIN_HISTORY_REJECTED", payload: err})
      })
  }
}
