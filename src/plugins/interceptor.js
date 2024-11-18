import axios from 'axios'
import { toast } from "react-toastify";


const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/';

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    console.log('Something went wrong', error);
    // if the error is 404, display toast message
    if (error.response.status === 404) {
      toast.error('404 error');
    }
    return Promise.reject(error);
  });

export default axiosInstance