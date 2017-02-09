import axios from "axios";

export function fetchMarks() {
  return function(dispatch) {
    dispatch({type: "FETCH_MARKS", payload: true});
    axios.get("http://api.local/?q=getMarks")
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
    axios.get("http://api.local/?q=getMarksClassByColumn"+"&id="+columnId)
      .then((response) => {
        dispatch({type: "FETCH_MARKS_CLASS_BY_COLUMN_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_MARKS_CLASS_BY_COLUMN_REJECTED", payload: err})
      })
  }
}
