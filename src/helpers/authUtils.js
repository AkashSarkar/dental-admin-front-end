import axios from 'axios';
import { API, PUBLIC_API, TOKEN } from '../config';

//Set the logged in user data in local session
const setLoggeedInUser = (token) => {
  localStorage.setItem(TOKEN, token);
}

// Gets the logged in user data from local session
const getLoggedInUser = () => {
  const user = localStorage.getItem('user');
  if (user)
    return JSON.parse(user);
  return null;
}

//is user is logged in
const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
}

// Register Method
const postRegister = (url, data) => {
  return axios.post(url, data).then(response => {
    if (response.status >= 200 || response.status <= 299)
      return response.data;
    throw response.data;
  }).catch(err => {
    var message;
    if (err.response && err.response.status) {
      switch (err.response.status) {
        case 404:
          message = "Sorry! the page you are looking for could not be found";
          break;
        case 500:
          message = "Sorry! something went wrong, please contact our support team";
          break;
        case 401:
          message = "Invalid credentials";
          break;
        default:
          message = err[1];
          break;
      }
    }
    throw message;
  });

}

// Login Method
const postLogin = (url, data) => {
  return PUBLIC_API.post(url, data).then(response => {
    if (response.status === 400 || response.status === 500)
      throw response.data;
    return response.data;
  }).catch(err => {
    throw err[1];
  });
}

const getUserProfile = (url, data) => {
  return API.get(url).then(response => {
    if (response.status === 400 || response.status === 500)
      throw response.data.profiles;
    return response.data.profiles;
  }).catch(err => {
    throw err[1];
  });
}


// postForgetPwd
const postForgetPwd = (url, data) => {
  return axios.post(url, data).then(response => {
    if (response.status === 400 || response.status === 500)
      throw response.data;
    return response.data;
  }).catch(err => {
    throw err[1];
  });
}


export {
  setLoggeedInUser, getLoggedInUser,
  isUserAuthenticated, postRegister, postLogin, postForgetPwd,
  getUserProfile
}
