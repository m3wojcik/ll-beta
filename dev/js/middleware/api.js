import React from 'react';
import axios from 'axios';
import qs  from "qs";
import {push} from 'react-router-redux';

import {browserHistory} from 'react-router'

export const BASE_URL = 'https://test.langlion.com/api'
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
  axios_config = {
    url: endpoint,
    timeout: 3000,
    baseURL: BASE_URL,
    method: method
  }
  if(method == 'get'){
    axios_config.params = {
      ...params,
      ...config
    }
  }else{
    axios_config.data = qs.stringify({
        ...params,
        ...config
    })
  }
  console.log('get', BASE_URL + endpoint + "?access_token="+ access_token, axios_config);
  return axios(axios_config)
  .then(response => {
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
        params: params ? params : null,
        payload: response.data,
        authenticated,
        type: successType
      })
      if(successToast){
         next({type: "RRS_SHOW_SNACK", payload: successToast})
      }
    },
    error => {
      console.warn("error", error)
      
      next({type: errorType, payload:error})
      var errorMsg;    
      if(error.response.data.error){
        if(error.response.data.error.message){
          errorMsg = error.response.data.error.message
        }else{
          errorMsg = error.response.data.error
        }
      }else{
        errorMsg = error.message
      }     
      next(
        {type: "RRS_SHOW_SNACK", payload: {id: "error", data: {label: errorMsg, button: {label: "Dismiss"}}}}
      )
      
       if(error.response && error.response.status == 401){
        browserHistory.replace({pathname:'login'})
      //   next({type: "@@router/LOCATION_CHANGE", payload:{action: "POP", pathname: "login", hash:""}})
       }
    }
  )
}
