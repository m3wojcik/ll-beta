import axios from 'axios';
const BASE_URL = 'https://test.langlion.com/api'
//const BASE_URL = 'http://api.local/'

function callApi(endpoint, authenticated, params) {

  let access_token = localStorage.getItem('access_token') || null
  let refresh_token = localStorage.getItem('refresh_token') || null
  let config = {}
  //
  if(authenticated) {
    if(access_token) {
      config = {
        'access_token': access_token
      }
    } else {
      throw "No token saved!"
    }
  }
  return axios(
    {
      url: endpoint,
      baseURL: BASE_URL,
      method: 'get',
      params: {
        ...params,
        ...config
      }
    }
  )
  .then(response => {
    if (response.data.error) {
      return Promise.reject(response.data.error)
    }
    return response.data
  })
  .catch((error) => {
    return Promise.reject(error)
  });
}

export const CALL_API = Symbol('Call API')

export default store => next => action => {
  const callAPI = action[CALL_API]
  // So the middleware doesn't get applied to every single action
  if (typeof callAPI === 'undefined') {
    return next(action)
  }
  let { endpoint, types, authenticated, params } = callAPI
  const [ requestType, successType, errorType ] = types
  next({type:requestType});
  // Passing the authenticated boolean back in our data will let us distinguish between normal and secret quotes
  return callApi(endpoint, authenticated, params).then(
    response => {
      next({
        response,
        authenticated,
        type: successType
      })},
    error => {
      next({
      error: error || 'There was an error.',
      type: errorType
    })}
  )
}
