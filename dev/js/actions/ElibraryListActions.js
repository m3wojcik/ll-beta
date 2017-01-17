import axios from "axios";

export function fetchElibraryList() {
  return function(dispatch) {
    axios.get("http://api.local/?q=getElibraryList")
      .then((response) => {
        dispatch({type: "FETCH_ELIBRARY_LIST_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_ELIBRARY_LIST_REJECTED", payload: err})
      })
  }
}
