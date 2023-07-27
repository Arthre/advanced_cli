import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const service = axios.create();

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

export default service;
