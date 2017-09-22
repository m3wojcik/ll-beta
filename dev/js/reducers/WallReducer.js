export default function reducer(state={
  wall: [],
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_WALL": {
        return {...state, fetching: true, fetched: false}
      }
      case "FETCH_WALL_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_WALL_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          wall: action.payload.wall,
        }
      }
    }
    return state
}
