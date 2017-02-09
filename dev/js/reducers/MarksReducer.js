export default function reducer(state={
  marks: [],
  marksClassByColumn: [],
  // marksClassByColumn:{
  //   columnId: null,
  //   name: "",
  //   gradeType: "",
  //   marks: [],
  //   fetching: false,
  //   fetched: false,
  // },
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_MARKS": {
        return {...state, fetching: true, fetched:false}
      }
      case "FETCH_MARKS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_MARKS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          marks: action.payload,
        }
      }
      case "FETCH_MARKS_CLASS_BY_COLUMN": {
        let newMarksClassByColumn = state.marksClassByColumn;
        newMarksClassByColumn[action.payload] = {fetching: true, fetched:false}
        return {...state, marksClassByColumn: newMarksClassByColumn}
      }
      case "FETCH_MARKS_CLASS_BY_COLUMN_REJECTED": {
        return {...state, marksClassByColumn:{fetching: false}, error: action.payload}
      }
      case "FETCH_MARKS_CLASS_BY_COLUMN_FULFILLED": {
        let newMarksClassByColumn = state.marksClassByColumn;
        newMarksClassByColumn[action.payload.columnId] = {
          columnId: action.payload.columnId,
          name: action.payload.name,
          gradeType: action.payload.gradeType,
          marks: action.payload.marks,
          fetching: false,
          fetched:true
        }
        return {
          ...state,
          marksClassByColumn: newMarksClassByColumn
        }
      }
    }
    return state
}
