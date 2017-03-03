import {instance} from './config'

export function fetchElibraryDetails() {
  return function(dispatch) {
    dispatch({type: "FETCH_ELIBRARY_DETAILS", payload: true});
    instance.get("?q=getElibraryDetails")
      .then((response) => {
        dispatch({type: "FETCH_ELIBRARY_DETAILS_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_ELIBRARY_DETAILS_REJECTED", payload: err})
      })
  }
}
