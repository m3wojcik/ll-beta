import {instance} from './config'

export function fetchElibraryList() {
  return function(dispatch) {
    dispatch({type: "FETCH_ELIBRARY_LIST", payload: true});
    instance.get("?q=getElibraryList")
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
export function setReserveElibraryObject(object) {
  return {
    type: 'SET_RESERVE_ELIBRARY_OBJECT',
    payload: object
  }
}
export function setReserveElibraryObjectId(objectId) {
  return {
    type: 'SET_RESERVE_ELIBRARY_OBJECT_ID',
    payload: objectId
  }
}
export function setReserveElibraryObjectDates(dateFrom, dateTo) {
  //console.log('setReserveElibraryObjectDates',dateFrom, dateTo);
  return {
    type: 'SET_RESERVE_ELIBRARY_OBJECT_DATES',
    payload: {dateFrom: dateFrom, dateTo: dateTo}
  }
}
export function postReserveElibraryObject(objectId, dateFrom, dateTo, callBack) {
  return function(dispatch) {
    dispatch({type: "POST_RESERVE_ELIBRARY_OBJECT", payload: true});
    axios.post("http://api.local/?q=reserveElibraryItem",{
      id: objectId,
      dateFrom: dateFrom,
      dateTo: dateTo
      })
      .then((response) => {
        if(callBack){
          callBack();
        }
        if(response.data == "200"){
          dispatch({type: "ADD_TOAST", payload: {"text": "Item reserved"}});
          dispatch({type: "POST_RESERVE_ELIBRARY_OBJECT_FULFILLED", payload: response.data});
        }else{
          dispatch({type: "ADD_TOAST", payload: {"text": "Item reservation fail"}});
          dispatch({type: "POST_RESERVE_ELIBRARY_OBJECT_REJECTED", payload: response.data})
        }
      })
      .catch((err) => {
        dispatch({type: "POST_RESERVE_ELIBRARY_OBJECT_REJECTED", payload: err})
      })
  }
}
export function postCancelReservationElibraryObject(objectId, unDoAction) {
  return function(dispatch) {
    dispatch({type: "POST_CANCEL_RESERVATION_ELIBRARY_OBJECT", payload: objectId});
    axios.post("http://api.local/?q=cancelReserveElibraryItem",{
      id: objectId
      })
      .then((response) => {
        if(response.data == "200"){
          dispatch({type: "ADD_TOAST", payload: {"text": "Reservation canceled","action":unDoAction}});
          dispatch({type: "POST_CANCEL_RESERVATION_ELIBRARY_OBJECT_FULFILLED", payload: response.data});
        }else{
          dispatch({type: "ADD_TOAST", payload: {"text": "Cancel reservation fail"}});
          dispatch({type: "POST_CANCEL_RESERVATION_ELIBRARY_OBJECT_REJECTED", payload: response.data})
        }
      })
      .catch((err) => {
        dispatch({type: "POST_CANCEL_RESERVATION_ELIBRARY_OBJECT_REJECTED", payload: err})
      })
  }
}
export function setElibraryList(elibrary) {
  return {
    type: 'SET_ELIBRARY_LIST',
    payload: elibrary
  }
}
