import { instance } from './config'
import axios from 'axios';
import {push} from 'react-router-redux';

import { CALL_API } from '../middleware/api'
//import cookie from 'react-cookie';
const API_URL = localStorage.getItem('instance_url')+'/api';
const CLIENT_ROOT_URL = '';

export function errorHandler(dispatch, error, type) {
  console.log('error',dispatch, error, type);
  let errorMessage = '';
  if(error.data.error) {
    errorMessage = error.data.error;
  } else if(error.data){
    errorMessage = error.data;
  } else {
    errorMessage = error;
  }
  if(error.status === 401) {
    dispatch({
      type: type,
      payload: 'You are not authorized to do this. Please login and try again.'
    });
    logoutUser();
  } else {
    dispatch({
      type: type,
      payload: errorMessage
    });
  }
}
export function loginUser(login, password) {
  return function(dispatch) {
      console.log('loginUser', login, password);
    axios(
      {
        url: '/login',
        baseURL: API_URL,
        method: 'post',
        data:{
          grant_type: 'password',
          username: login,
          password: password
        },
        auth:{
          username: 'mobile',
          password: 'mobile123'
        }
      }
    )
    .then(response => {
        console.log('auth-response',response);
        if(response.data.error){
            errorHandler(dispatch, response, "AUTH_ERROR")
        }else{
            localStorage.setItem('access_token',response.data.access_token);
            localStorage.setItem('refresh_token',response.data.refresh_token);
            dispatch({ type: "AUTH_USER" });
            dispatch(push("/"));
        }
    })
    .catch((error) => {
      console.dir(error);
      errorHandler(dispatch, error.response, "AUTH_ERROR")
    });
    }
  }
  export function getTodaysClass(params) {
    return {
      [CALL_API]: {
        endpoint: '/todayClasses',
        types: ["QUOTE_REQUEST", "QUOTE_SUCCESS", "QUOTE_FAILURE"],
        authenticated: true,
        params: params
      }
    }
  }

  export function registerUser({ email, firstName, lastName, password }) {
  return function(dispatch) {
    axios.post(`${API_URL}/auth/register`, { email, firstName, lastName, password })
    .then(response => {
      //cookie.save('token', response.data.token, { path: '/' });
      dispatch({ type: "AUTH_USER" });
      window.location.href = CLIENT_ROOT_URL + '/dashboard';
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, "AUTH_ERROR")
    });
  }
}
export function logoutUser() {
  return function (dispatch) {
    dispatch({ type: "UNAUTH_USER" });
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    dispatch(push("/login"));
  }
}
