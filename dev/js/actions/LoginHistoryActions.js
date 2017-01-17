import axios from "axios";

export function fetchLoginHistory() {
  return function(dispatch) {
    axios.get("http://api.local/?q=getLoginHistory")
      .then((response) => {
        dispatch({type: "FETCH_LOGIN_HISTORY_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_LOGIN_HISTORY_REJECTED", payload: err})
      })
  }
}
