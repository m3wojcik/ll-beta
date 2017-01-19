import axios from "axios";

export function fetchElibraryDetails() {
  return function(dispatch) {
    dispatch({type: "FETCH_ELIBRARY_DETAILS", payload: true});
    axios.get("http://api.local/?q=getElibraryDetails")
      .then((response) => {
        dispatch({type: "FETCH_ELIBRARY_DETAILS_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_ELIBRARY_DETAILS_REJECTED", payload: err})
      })
  }
}
