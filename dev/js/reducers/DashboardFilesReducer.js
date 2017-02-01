export default function reducer(state={
  path: [],
  files:[],
  currentFolderId: 0,
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_DASHBOARD_FILES": {
        return {...state, fetching: true, fetched:false}
      }
      case "FETCH_DASHBOARD_FILES_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          path: action.payload.path,
          files: action.payload.files
        }
      }
      case "FETCH_DASHBOARD_FILES_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
    }
    return state
}
