import {instance} from './config'

export function fetchMarks() {
  return function(dispatch) {
    dispatch({type: "FETCH_MARKS", payload: true});
    instance.get("?q=getMarks")
      .then((response) => {
        dispatch({type: "FETCH_MARKS_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_MARKS_REJECTED", payload: err})
      })
  }
}
export function fetchMarksClassByColumn(columnId) {
  return function(dispatch) {
    dispatch({type: "FETCH_MARKS_CLASS_BY_COLUMN", payload: columnId});
    instance.get("?q=getMarksClassByColumn"+"&id="+columnId)
      .then((response) => {
        dispatch({type: "FETCH_MARKS_CLASS_BY_COLUMN_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_MARKS_CLASS_BY_COLUMN_REJECTED", payload: err})
      })
  }
}
export function fetchMarksClassAverage(groupId) {
  return function(dispatch) {
    dispatch({type: "FETCH_MARKS_CLASS_AVERAGE", payload: groupId});
    instance.get("?q=getMarksClassAverage"+"&id="+groupId)
      .then((response) => {
        dispatch({type: "FETCH_MARKS_CLASS_AVERAGE_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_MARKS_CLASS_AVERAGE_REJECTED", payload: err})
      })
  }
}
