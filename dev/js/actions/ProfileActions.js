import axios from "axios";

export function fetchUserData() {
  return function(dispatch) {
    axios.get("http://api.local/?q=getUserData")
      .then((response) => {
        dispatch({type: "FETCH_USER_DATA_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_USER_DATA_REJECTED", payload: err})
      })
  }
}
export function setUserData(userData) {
  return {type: "SET_USER_DATA", payload: userData};
}
