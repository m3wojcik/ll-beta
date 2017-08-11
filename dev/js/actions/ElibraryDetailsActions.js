import { CALL_API } from '../middleware/api'

export function fetchElibraryDetails(params) {
  return {
    [CALL_API]: {
      endpoint: '/elibraryDetails',
      types: ["FETCH_ELIBRARY_DETAILS", "FETCH_ELIBRARY_DETAILS_FULFILLED", "FETCH_ELIBRARY_DETAILS_REJECTED"],
      authenticated: true,
      method: 'get',
      params: {...params}
    }
  }
}

// import {instance} from './config'
//
// export function fetchElibraryDetails() {
//   return function(dispatch) {
//     dispatch({type: "FETCH_ELIBRARY_DETAILS", payload: true});
//     instance.get("?q=getElibraryDetails")
//       .then((response) => {
//         dispatch({type: "FETCH_ELIBRARY_DETAILS_FULFILLED", payload: response.data});
//       })
//       .catch((err) => {
//         dispatch({type: "FETCH_ELIBRARY_DETAILS_REJECTED", payload: err})
//       })
//   }
// }
