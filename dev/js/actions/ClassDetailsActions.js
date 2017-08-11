import { CALL_API } from '../middleware/api'

export function fetchClassDetails(params) {
  return {
    [CALL_API]: {
      endpoint: '/classDetails',
      types: ["FETCH_CLASS_DETAILS", "FETCH_CLASS_DETAILS_FULFILLED", "FETCH_CLASS_DETAILS_REJECTED"],
      authenticated: true,
      method: 'get',
      params: {...params}
    }
  }
}

export function fetchClassLessonObjects(params) {
  return {
    [CALL_API]: {
      endpoint: '/lessonDetails',
      types: ["FETCH_CLASS_LESSON_OBJECTS", "FETCH_CLASS_LESSON_OBJECTS_FULFILLED", "FETCH_CLASS_LESSON_OBJECTS_REJECTED"],
      authenticated: true,
      method: 'get',
      params: {...params}
    }
  }
}
export function fetchClassFiles(params) {
  return {
    [CALL_API]: {
      endpoint: '/files',
      types: ["FETCH_CLASS_FILES", "FETCH_CLASS_FILES_FULFILLED", "FETCH_CLASS_FILES_REJECTED"],
      authenticated: true,
      method: 'get',
      params: {...params}
    }
  }
}

import {instance} from './config'

// export function fetchClassDetails(classId) {
//   return function(dispatch) {
//     dispatch({type: "FETCH_CLASS_DETAILS", payload: classId});
//     instance({
//       method: 'get',
//       url:'?q=getClassDetails',
//       params: {
//         id: classId
//       }
//     }).then((response) => {
//         dispatch({type: "FETCH_CLASS_DETAILS_FULFILLED", payload: response.data});
//       })
//       .catch((err) => {
//         dispatch({type: "FETCH_CLASS_DETAILS_REJECTED", payload: err})
//       })
//   }
// }
// export function fetchClassLessonObjects(classId) {
//   return function(dispatch) {
//     dispatch({type: "FETCH_CLASS_LESSON_OBJECTS", payload: classId});
//     instance({
//       method: 'get',
//       url:'?q=getClassLessonObjects',
//       params: {
//         id: classId
//       }
//     }).then((response) => {
//         dispatch({type: "FETCH_CLASS_LESSON_OBJECTS_FULFILLED", payload: response.data});
//       })
//       .catch((err) => {
//         dispatch({type: "FETCH_CLASS_LESSON_OBJECTS_REJECTED", payload: err})
//       })
//   }
// }
export function fetchClassTests(classId) {
  return function(dispatch) {
    dispatch({type: "FETCH_CLASS_TESTS", payload: classId});
    instance({
      method: 'get',
      url:'?q=getClassTests',
      params: {
        id: classId
      }
    }).then((response) => {
        dispatch({type: "FETCH_CLASS_TESTS_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_CLASS_TESTS_REJECTED", payload: err})
      })
  }
}
// export function fetchClassFiles(classId) {
//   return function(dispatch) {
//     dispatch({type: "FETCH_CLASS_FILES", payload: classId});
//     instance({
//       method: 'get',
//       url:'?q=getClassFiles',
//       params: {
//         id: classId
//       }
//     }).then((response) => {
//         dispatch({type: "FETCH_CLASS_FILES_FULFILLED", payload: response.data});
//       })
//       .catch((err) => {
//         dispatch({type: "FETCH_CLASS_FILES_REJECTED", payload: err})
//       })
//   }
// }
