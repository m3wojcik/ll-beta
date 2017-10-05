import { CALL_API } from '../middleware/api'

export function fetchTests() {
  return {
    [CALL_API]: {
      endpoint: '/tests',
      types: ["FETCH_TESTS", "FETCH_TESTS_FULFILLED", "FETCH_TESTS_REJECTED"],
      authenticated: true,
      method: 'get'
    }
  }
}
