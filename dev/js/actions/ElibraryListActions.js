import { CALL_API } from '../middleware/api'

export function fetchElibraryList() {
  return {
    [CALL_API]: {
      endpoint: '/elibraryList',
      types: ["FETCH_ELIBRARY_LIST", "FETCH_ELIBRARY_LIST_FULFILLED", "FETCH_ELIBRARY_LIST_REJECTED"],
      authenticated: true,
      method: 'get'
    }
  }
}
export function fetchElibraryReservations() {
  return {
    [CALL_API]: {
      endpoint: '/elibraryReservationList',
      types: ["FETCH_ELIBRARY_RESERVATIONS", "FETCH_ELIBRARY_RESERVATIONS_FULFILLED", "FETCH_ELIBRARY_RESERVATIONS_REJECTED"],
      authenticated: true,
      method: 'get'
    }
  }
}
export function fetchElibraryBookings() {
  return {
    [CALL_API]: {
      endpoint: '/elibraryBooking',
      types: ["FETCH_ELIBRARY_BOOKING", "FETCH_ELIBRARY_BOOKING_FULFILLED", "FETCH_ELIBRARY_BOOKING_REJECTED"],
      authenticated: true,
      method: 'get'
    }
  }
}
export function saveReservation(params) {
  return {
    [CALL_API]: {
      endpoint: '/elibraryReservation',
      types: ["SAVE_RESERVATION", "SAVE_RESERVATION_FULFILLED", "SAVE_RESERVATION_REJECTED"],
      authenticated: true,
      method: 'post',
      params:{
        ...params
      }
    }
  }
}
export function cancelReservation(params) {
  return {
    [CALL_API]: {
      endpoint: '/elibraryReservationCancel',
      types: ["CANCEL_RESERVATION", "CANCEL_RESERVATION_FULFILLED", "CANCEL_RESERVATION_REJECTED"],
      authenticated: true,
      method: 'post',
      params:{
        ...params
      }
    }
  }
}

export function setElibraryView(params) {
  return {
    type: 'SET_ELIBRARY_VIEW',
    payload: params
  }
}

export function toggleElibraryDrawer(visible) {
  return {
    type: 'TOGGLE_ELIBRARY_DRAWER',
    payload: visible
  }
}

export function toggleElibraryDialog(visible) {
  return {
    type: 'TOGGLE_ELIBRARY_DIALOG',
    payload: visible
  }
}

export function setResevedObject(object) {
  return {
    type: 'SET_RESERVED_OBJECT',
    payload: object
  }
}

export function setResevedDateFrom(date) {
  return {
    type: 'SET_RESERVED_DATE_FROM',
    payload: date
  }
}

import {instance} from './config'

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
    instance.post("?q=reserveElibraryItem",{
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
    instance.post("?q=cancelReserveElibraryItem",{
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
