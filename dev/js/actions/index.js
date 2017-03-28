import { instance } from './config'
import axios from 'axios';
import {push} from 'react-router-redux';
//import cookie from 'react-cookie';
const API_URL = 'https://test.langlion.com/api';
const CLIENT_ROOT_URL = '';
import { AUTH_USER,
         AUTH_ERROR,
         UNAUTH_USER,
         PROTECTED_TEST} from './config'

export function errorHandler(dispatch, error, type) {
    console.log('error');
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
    axios.post(`${API_URL}/login`,
        {
        grant_type: 'password',
        username: login,
        password: password
    },{
        auth: {
          username: 'mobile',
          password: 'mobile123'
        }
    })
    .then(response => {
        console.log('auth-response',response);
        if(response.data.error){
            errorHandler(dispatch, response, AUTH_ERROR)
        }else{
            localStorage.setItem('access_token',response.data.access_token);
            localStorage.setItem('refresh_token',response.data.refresh_token);
            dispatch({ type: AUTH_USER });
            dispatch(push("/"));
        }
    })
    .catch((error) => {
        console.log('error',error);
      errorHandler(dispatch, error.response, AUTH_ERROR)
    });
    }
  }
  export function registerUser({ email, firstName, lastName, password }) {
  return function(dispatch) {
    axios.post(`${API_URL}/auth/register`, { email, firstName, lastName, password })
    .then(response => {
      //cookie.save('token', response.data.token, { path: '/' });
      dispatch({ type: AUTH_USER });
      window.location.href = CLIENT_ROOT_URL + '/dashboard';
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, AUTH_ERROR)
    });
  }
}

export function logoutUser() {
  return function (dispatch) {
    dispatch({ type: UNAUTH_USER });
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    dispatch(push("/login"));
  }
}

export function protectedTest() {
  return function(dispatch) {
    axios.get(`${API_URL}/protected`, {
      //headers: { 'Authorization': cookie.load('token') }
    })
    .then(response => {
      dispatch({
        type: PROTECTED_TEST,
        payload: response.data.content
      });
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, AUTH_ERROR)
    });
  }
}
