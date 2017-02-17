export default function reducer(state={
  marks: [],
  marksClassByColumn: [],
  marksClassAverage:[],
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
        let newMarksClassByColumn = state.marksClassByColumn.slice();
        newMarksClassByColumn[action.payload] = {fetching: true, fetched:false}
        return {...state, marksClassByColumn: newMarksClassByColumn}
      }
      case "FETCH_MARKS_CLASS_BY_COLUMN_REJECTED": {
        return {...state, marksClassByColumn:{fetching: false}, error: action.payload}
      }
      case "FETCH_MARKS_CLASS_BY_COLUMN_FULFILLED": {
        let newMarksClassByColumn =   state.marksClassByColumn.slice();
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
      case "FETCH_MARKS_CLASS_AVERAGE": {
        let newMarksClassAverage = state.marksClassAverage.slice();
        newMarksClassAverage[action.payload] = {fetching: true, fetched:false}
        return {...state, marksClassAverage: newMarksClassAverage}
      }
      case "FETCH_MARKS_CLASS_AVERAGE_REJECTED": {
        return {...state, marksClassAverage:{fetching: false}, error: action.payload}
      }
      case "FETCH_MARKS_CLASS_AVERAGE_FULFILLED": {
        let newMarksClassAverage =   state.marksClassAverage.slice();
        newMarksClassAverage[action.payload.groupId] = {
          groupId: action.payload.groupId,
          gradeType: action.payload.gradeType,
          averages: action.payload.averages,
          fetching: false,
          fetched:true
        }
        return {
          ...state,
          marksClassAverage: newMarksClassAverage
        }
      }
    }
    return state
}
