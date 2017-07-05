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
import axios from "axios";
export function fetchAvatars() {
  return function(dispatch) {
    dispatch({type: "FETCH_AVATARS", payload: null});
    axios.get("http://api.local/?q=getAvatars")
      .then((response) => {
        dispatch({type: "FETCH_AVATARS_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_AVATARS_REJECTED", payload: err})
      })
  }
}
