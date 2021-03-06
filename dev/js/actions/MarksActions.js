import {instance} from './config'
import { CALL_API } from '../middleware/api'

export function fetchMarks() {
  return {
    [CALL_API]: {
      endpoint: '/marks',
      types: ["FETCH_MARKS", "FETCH_MARKS_FULFILLED", "FETCH_MARKS_REJECTED"],
      authenticated: true,
      method: 'get'
    }
  }
}
export function fetchMarksClassByColumn(params) {
  return {
    [CALL_API]: {
      endpoint: '/marksByColumn',
      types: ["FETCH_MARKS_CLASS_BY_COLUMN", "FETCH_MARKS_CLASS_BY_COLUMN_FULFILLED", "FETCH_MARKS_CLASS_BY_COLUMN_REJECTED"],
      authenticated: true,
      method: 'get',
      params: {...params}
    }
  }
}
export function fetchMarksClassAverage(params) {
  return {
    [CALL_API]: {
      endpoint: '/marksClassAverage',
      types: ["FETCH_MARKS_CLASS_AVERAGE", "FETCH_MARKS_CLASS_AVERAGE_FULFILLED", "FETCH_MARKS_CLASS_AVERAGE_REJECTED"],
      authenticated: true,
      method: 'get',
      params: {...params}
    }
  }
}
// export function fetchMarks() {
//   return function(dispatch) {
//     dispatch({type: "FETCH_MARKS", payload: true});
//     instance.get("?q=getMarks")
//       .then((response) => {
//         dispatch({type: "FETCH_MARKS_FULFILLED", payload: response.data});
//       })
//       .catch((err) => {
//         dispatch({type: "FETCH_MARKS_REJECTED", payload: err})
//       })
//   }
// }
// export function fetchMarksClassByColumn(columnId) {
//   return function(dispatch) {
//     dispatch({type: "FETCH_MARKS_CLASS_BY_COLUMN", payload: columnId});
//     instance.get("?q=getMarksClassByColumn"+"&id="+columnId)
//       .then((response) => {
//         dispatch({type: "FETCH_MARKS_CLASS_BY_COLUMN_FULFILLED", payload: response.data});
//       })
//       .catch((err) => {
//         dispatch({type: "FETCH_MARKS_CLASS_BY_COLUMN_REJECTED", payload: err})
//       })
//   }
// }
// export function fetchMarksClassAverage(groupId) {
//   return function(dispatch) {
//     dispatch({type: "FETCH_MARKS_CLASS_AVERAGE", payload: groupId});
//     instance.get("?q=getMarksClassAverage"+"&id="+groupId)
//       .then((response) => {
//         dispatch({type: "FETCH_MARKS_CLASS_AVERAGE_FULFILLED", payload: response.data});
//       })
//       .catch((err) => {
//         dispatch({type: "FETCH_MARKS_CLASS_AVERAGE_REJECTED", payload: err})
//       })
//   }
// }
