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
export function changeElibraryItemStatus(id, status) {
  return {
    type: 'CHANGE_ELIBRARY_ITEM_STATUS',
    payload: {
      id,
      status
    }
  }
}
export function reserveElibraryItem(id, date) {
  return function(dispatch) {
    axios.post("http://api.local/?q=reserveElibraryItem",{
      id: id,
      date: date
      })
      .then((response) => {
        dispatch({type: "RESERVE_ELIBRARY_ITEM_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "RESERVE_ELIBRARY_ITEM_REJECTED", payload: err})
      })
  }
  // return {
  //   type: 'RESERVE_ELIBRARY_ITEM',
  //   payload: {
  //     id,
  //     date
  //   }
  // }
}
export function setElibraryList(elibrary) {
  return {
    type: 'SET_ELIBRARY_LIST',
    payload: elibrary
  }
}
