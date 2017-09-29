export default function reducer(state={
  marks: [],
  marksClassByColumn: {},
  marksClassAverage:{},
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
        
        let newMarksClassByColumn = Object.assign({}, state.marksClassByColumn)
        newMarksClassByColumn[action.payload] = {fetching: true, fetched:false}
        return {...state, marksClassByColumn: newMarksClassByColumn}
      }
      case "FETCH_MARKS_CLASS_BY_COLUMN_REJECTED": {
        return {...state, marksClassByColumn:{fetching: false}, error: action.payload}
      }
      case "FETCH_MARKS_CLASS_BY_COLUMN_FULFILLED": {
        let newMarksClassByColumn =   Object.assign({}, state.marksClassByColumn)
        newMarksClassByColumn[action.payload.marksByColumn.mark_group_id] = {
          columnId: action.payload.marksByColumn.mark_group_id,
          name: action.payload.marksByColumn.name,
          gradeType: action.payload.marksByColumn.point_system_type,
          weight: action.payload.marksByColumn.importance, 
          marks: action.payload.marksByColumn.marks,
          fetching: false,
          fetched:true
        }
        return {
          ...state,
          marksClassByColumn: newMarksClassByColumn
        }
      }
      case "FETCH_MARKS_CLASS_AVERAGE": {
        let newMarksClassAverage = Object.assign({}, state.marksClassAverage)
        newMarksClassAverage[action.payload.group_id] = {fetching: true, fetched:false}
        return {...state, marksClassAverage: newMarksClassAverage}
      }
      case "FETCH_MARKS_CLASS_AVERAGE_REJECTED": {
        return {...state, marksClassAverage:{fetching: false}, error: action.payload}
      }
      case "FETCH_MARKS_CLASS_AVERAGE_FULFILLED": {
        let newMarksClassAverage =   Object.assign({}, state.marksClassAverage)
        newMarksClassAverage[action.payload.average.group_id] = {
          groupId: action.payload.average.group_id,
          gradeType: action.payload.average.point_system_type,
          averages: action.payload.average.averages,
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
