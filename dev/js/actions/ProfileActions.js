import axios from "axios";
import querystring  from "query-string";
import { CALL_API } from '../middleware/api'

// export function saveUserData() {
//   return function(dispatch) {
//     dispatch({type: "SAVE_USER_DATA"});
//     axios(
//       {
//         url: '/userProfile',
//         baseURL: 'https://test.langlion.com/api',
//         method: 'post',
//         data:querystring.stringify({
//           access_token: localStorage.getItem('access_token'),
//           email: "test@test.pl",
//           phone: "123"
//         })
//       }
//     )
//       .then((response) => {
//         dispatch({type: "SAVE_USER_DATA_FULFILLED", payload: response.data});
//       })
//       .catch((err) => {
//         dispatch({type: "SAVE_USER_DATA_REJECTED", payload: err})
//       })
//   }
// }
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
export function setUserData(userData) {
  return {type: "SET_USER_DATA", payload: userData};
}
