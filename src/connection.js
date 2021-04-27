/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import axios from 'axios';

const baseURL = 'https://phonews-prod.herokuapp.com';
// const baseURL = 'http://localhost:8000';
// request interceptor to add the auth token header to requests
axios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
      config.headers.token = accessToken;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
// response interceptor to refresh token on receiving token expired error
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem('token');
    if (
      refreshToken
      && error.response.status === 401
      && !originalRequest._retry
    ) {
      originalRequest._retry = true;
      return axios
        .post(`${baseURL}/api-token-refresh/`, { refreshToken })
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem('token', res.data.token);
            console.log('Access token refreshed!');
            return axios(originalRequest);
          }
          return null;
        });
    }
    return Promise.reject(error);
  }
);

const instance = axios.create({
  baseURL,
  withCredentials: false,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});

export default instance;
