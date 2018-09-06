import { CALL_API } from '../middleware/api'

export function saveUserData(params) {
  return {
    [CALL_API]: {
      endpoint: '/userProfile',
      types: ["SAVE_USER_DATA", "SAVE_USER_DATA_FULFILLED", "SAVE_USER_DATA_REJECTED"],
      authenticated: true,
      method: 'post',
      params:{
        ...params
      }
    }
  }
}
export function fetchUserData() {
  return {
    [CALL_API]: {
      endpoint: '/userProfile',
      types: ["FETCH_USER_DATA", "FETCH_USER_DATA_FULFILLED", "FETCH_USER_DATA_REJECTED"],
      authenticated: true,
      method: 'get'
    }
  }
}
export function changePassword(params) {
  return {
    [CALL_API]: {
      endpoint: '/changePassword',
      types: ["SAVE_PASSWORD", "SAVE_PASSWORD_FULFILLED", "SAVE_PASSWORD_REJECTED"],
      authenticated: true,
      method: 'post',
      params:{
        ...params
      }
    }
  }
}
export function fetchAvatar(params) {
  return {
    [CALL_API]: {
      endpoint: '/avatar',
      types: ["FETCH_AVATAR", "FETCH_AVATAR_FULFILLED", "FETCH_AVATAR_REJECTED"],
      authenticated: true,
      method: 'get',
      params: {...params}
    }
  }
}
export function saveAvatar(params) {
  return {
    [CALL_API]: {
      endpoint: '/uploadAvatar',
      types: ["SAVE_AVATAR", "SAVE_AVATAR_FULFILLED", "SAVE_AVATAR_REJECTED"],
      authenticated: true,
      method: 'post',
      params: {...params}
    }
  }
}
export function fetchStudentHistory() {
  return {
    [CALL_API]: {
      endpoint: '/studentHistory',
      types: ["FETCH_STUDENT_HISTORY", "FETCH_STUDENT_HISTORY_FULFILLED", "FETCH_STUDENT_HISTORY_REJECTED"],
      authenticated: true,
      method: 'post'
    }
  }
}
export function updateCanvas(img) {
  return {
    type: 'UPDATE_CANVAS',
    payload: img,
  }
}
export function setCanvaRef(ref) {
  return {
    type: 'SET_CANVA_REF',
    payload: ref,
  }
}

import {instance} from './config'


export function uploadAvatar(data) {
  return function(dispatch) {
    dispatch({type: "UPLOAD_AVATAR", payload: null});
    instance({
      method: 'post',
      url:'/uploadAvatar',
      data: data,
      params: {
        access_token: localStorage.getItem('access_token')
      }
    }).then((response) => {
        dispatch({type: "UPLOAD_AVATAR_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "UPLOAD_AVATAR_REJECTED", payload: err})
      })
  }
}