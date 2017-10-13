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

export function fetchTest(params) {
  return {
    [CALL_API]: {
      endpoint: '/test',
      types: ["FETCH_TEST", "FETCH_TEST_FULFILLED", "FETCH_TEST_REJECTED"],
      authenticated: true,
      method: 'get',
      params: {...params}
    }
  }
}

export function sendTest(params) {
  return {
    [CALL_API]: {
      endpoint: '/testSend',
      types: ["SEND_TEST", "SEND_TEST_FULFILLED", "SEND_TEST_REJECTED"],
      authenticated: true,
      method: 'post',
      params: {...params}
    }
  }
}

export function addTestAnswer(params) {
  return {
    type: 'ADD_TEST_ANSWER',
    payload: params
  }
}