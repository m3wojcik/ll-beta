import axios from 'axios';
import querystring  from "query-string";

export const BASE_URL = 'https://test.langlion.com/api/'
//const BASE_URL = 'http://api.local/'

function callApi(endpoint, authenticated, params, method) {
  let access_token = localStorage.getItem('access_token') || null
  let refresh_token = localStorage.getItem('refresh_token') || null
  let config = {}
  let axios_config = {}
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
  console.log('callApi', params);
  if(method == 'get'){
    axios_config = {
      url: endpoint,
      baseURL: BASE_URL,
      method: method,
      params: {
        ...params,
        ...config
      }
    }
  }else{
    axios_config = {
      url: endpoint,
      baseURL: BASE_URL,
      method: method,
      data: querystring.stringify({
        ...params,
        ...config
      })
    }
  }
  console.log('get', BASE_URL, axios_config);
  return axios(axios_config)
  .then(response => {
    if (response.data.error) {
      throw response.data.error
    }
    return response.data
  })
  .catch((error) => {
    throw error
  });
}

export const CALL_API = Symbol('Call API')

export default store => next => action => {
  const callAPI = action[CALL_API]
  // So the middleware doesn't get applied to every single action
  if (typeof callAPI === 'undefined') {
    return next(action)
  }
  let { endpoint, types, authenticated, params, method, successToast } = callAPI
  const [ requestType, successType, errorType ] = types
  next({type:requestType, payload: params});
  // Passing the authenticated boolean back in our data will let us distinguish between normal and secret quotes
  return callApi(endpoint, authenticated, params, method, successToast).then(
    response => {
      next({
        payload: response.data,
        authenticated,
        type: successType
      })
      if(successToast){
         next({type: "RRS_SHOW_SNACK", payload: successToast})
      }

    },
    error => {
      next({
      payload: error || 'There was an error.',
      type: errorType
      })
      next(
        {type: "RRS_SHOW_SNACK", payload: {id: "error", data: {label: error.message, button: {label: "Dismiss"}}}}
      )
    }
  )
}
