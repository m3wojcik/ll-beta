// import axios from "axios";
//
// export function fetchTests() {
//   return function(dispatch) {
//     dispatch({type: "FETCH_TESTS", payload: true});
//     axios.get("http://api.local/?q=getTests")
//       .then((response) => {
//         dispatch({type: "FETCH_TESTS_FULFILLED", payload: response.data});
//       })
//       .catch((err) => {
//         dispatch({type: "FETCH_TESTS_REJECTED", payload: err})
//       })
//   }
// }
import { CALL_API } from '../middleware/api'

export function fetchTests() {
  return {
    [CALL_API]: {
      endpoint: '/tests',
      types: ["FETCH_TESTS", "FETCH_TESTS_FULFILLED", "FETCH_TESTS_REJECTED"],
      authenticated: true,
      method: 'get'
    }
  }
}
