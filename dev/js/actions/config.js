import axios from "axios";
export const instance = axios.create({
  baseURL: 'http://api.local/'
});
export const errorMessage = {
  "invalid_request": "Invalid user or password",
  "invalid_grant": "Invalid user or password"
}
