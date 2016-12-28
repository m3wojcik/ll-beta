export default function reducer(state={
  attendance: [],
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_ATTENDANCE_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_ATTENDANCE_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          attendance: action.payload,
        }
      }
    }
    return state
}
