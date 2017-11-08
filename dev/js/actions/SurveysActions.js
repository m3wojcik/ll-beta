import { CALL_API } from '../middleware/api'

export function fetchSurveys() {
  return {
    [CALL_API]: {
      endpoint: '/surveys',
      types: ["FETCH_SURVEYS", "FETCH_SURVEYS_FULFILLED", "FETCH_SURVEYS_REJECTED"],
      authenticated: true,
      method: 'get'
    }
  }
}
export function fetchSurvey(params) {
  return {
    [CALL_API]: {
      endpoint: '/survey',
      types: ["FETCH_SURVEY", "FETCH_SURVEY_FULFILLED", "FETCH_SURVEY_REJECTED"],
      authenticated: true,
      method: 'get',
      params: {...params}
    }
  }
}
export function fetchViewSurvey(params) {
  return {
    [CALL_API]: {
      endpoint: '/surveyView',
      types: ["FETCH_VIEW_SURVEY", "FETCH_VIEW_SURVEY_FULFILLED", "FETCH_VIEW_SURVEY_REJECTED"],
      authenticated: true,
      method: 'get',
      params: {...params}
    }
  }
}
export function sendSurvey(params) {
  return {
    [CALL_API]: {
      endpoint: '/surveySend',
      types: ["SEND_SURVEY", "SEND_SURVEY_FULFILLED", "SEND_SURVEY_REJECTED"],
      authenticated: true,
      method: 'post',
      params: {...params}
    }
  }
}
export function addSurveyAnswer(params) {
  return {
    type: 'ADD_SURVEY_ANSWER',
    payload: params
  }
}