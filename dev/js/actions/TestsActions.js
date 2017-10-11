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

export function fetchViewTest(params) {
  return {
    [CALL_API]: {
      endpoint: '/testView',
      types: ["FETCH_VIEW_TEST", "FETCH_VIEW_TEST_FULFILLED", "FETCH_VIEW_TEST_REJECTED"],
      authenticated: true,
      method: 'get',
      params:{...params}
    }
  }
}
