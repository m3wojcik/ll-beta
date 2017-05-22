import { CALL_API } from '../middleware/api'

export function fetchClasses(params) {
  return {
    [CALL_API]: {
      endpoint: '/classes',
      types: ["FETCH_CLASSES", "FETCH_CLASSES_FULFILLED", "FETCH_CLASSES_REJECTED"],
      authenticated: true,
      method: 'get',
      params:{...params}
    }
  }
}
