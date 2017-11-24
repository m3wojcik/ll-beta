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
      },
      successToast: {id:"profile_updated", data:{label:"Profile was successfully updated", timeout: 3000 } }
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
export function fetchAvatar() {
  return {
    [CALL_API]: {
      endpoint: '/getAvatar',
      types: ["FETCH_AVATAR", "FETCH_AVATAR_FULFILLED", "FETCH_AVATAR_REJECTED"],
      authenticated: true,
      method: 'get'
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

export function fetchStudentHistory() {
  return function(dispatch) {
    dispatch({type: "FETCH_STUDENT_HISTORY"});
    instance({
      method: 'get',
      url:'?q=getStudentHistory'
    }).then((response) => {
        dispatch({type: "FETCH_STUDENT_HISTORY_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_STUDENT_HISTORY_REJECTED", payload: err})
      })
  }
}