import axios from "axios";
export const instance = axios.create({
  baseURL: 'http://api.local/'
});
export const AUTH_USER = 'AUTH_USER',
             UNAUTH_USER = 'UNAUTH_USER',
             AUTH_ERROR = 'AUTH_ERROR',
             FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST',
             RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST',
             PROTECTED_TEST = 'PROTECTED_TEST';

export const FETCH_APP_DATA = 'FETCH_APP_DATA',
             FETCH_APP_DATA_FULFILLED = 'FETCH_APP_DATA_FULFILLED',
             FETCH_APP_DATA_REJECTED = 'FETCH_APP_DATA_REJECTED';
export const errorMessage = {
  "invalid_request": "Invalid user or password",
  "invalid_grant": "Invalid user or password"
}
