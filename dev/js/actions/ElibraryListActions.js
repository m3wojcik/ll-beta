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
export function changeElibraryObjectStatus(id, status) {
  return {
    type: 'CHANGE_ELIBRARY_OBJECT_STATUS',
    payload: {
      id,
      status
    }
  }
}
export function setReserveElibraryObjectId(objectId) {
  return {
    type: 'SET_RESERVE_ELIBRARY_OBJECT_ID',
    payload: objectId
  }
}
export function setReserveElibraryObjectDateFrom(dateFrom) {
  return {
    type: 'SET_RESERVE_ELIBRARY_OBJECT_DATE_FROM',
    payload: dateFrom
  }
}
export function postReserveElibraryObject(objectId, dateFrom) {
  return function(dispatch) {
    dispatch({type: "POST_RESERVE_ELIBRARY_OBJECT", payload: true});
    axios.post("http://api.local/?q=reserveElibraryItem",{
      id: objectId,
      date: dateFrom
      })
      .then((response) => {
        dispatch({type: "POST_RESERVE_ELIBRARY_OBJECT_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "POST_RESERVE_ELIBRARY_OBJECT_REJECTED", payload: err})
      })
  }
}
export function setElibraryList(elibrary) {
  return {
    type: 'SET_ELIBRARY_LIST',
    payload: elibrary
  }
}
