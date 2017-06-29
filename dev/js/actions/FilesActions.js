import { CALL_API } from '../middleware/api'

export function fetchFiles(params) {
  return {
    [CALL_API]: {
      endpoint: '/files',
      types: ["FETCH_FILES", "FETCH_FILES_FULFILLED", "FETCH_FILES_REJECTED"],
      authenticated: true,
      method: 'get',
      params: {...params}
    }
  }
}
