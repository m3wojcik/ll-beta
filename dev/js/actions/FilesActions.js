import axios from "axios";

export function fetchFiles(folderId) {
  console.log("filesActions",folderId);
  return function(dispatch) {
    dispatch({type: "FETCH_FILES", payload: folderId});
    axios.get("http://api.local/?q=getFiles"+"&id="+folderId)
      .then((response) => {
        dispatch({type: "FETCH_FILES_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_FILES_REJECTED", payload: err})
      })
  }
}
