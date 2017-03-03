import {instance} from './config'

export function fetchFiles(folderId) {
  return function(dispatch) {
    dispatch({type: "FETCH_FILES", payload: folderId});
    instance.get("?q=getFiles"+"&id="+folderId)
      .then((response) => {
        dispatch({type: "FETCH_FILES_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_FILES_REJECTED", payload: err})
      })
  }
}
