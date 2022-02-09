import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
// import MockAdapter from 'axios-mock-adapter';
// import { mock, mockFail } from './Mock';

const config: AxiosRequestConfig = {
  baseURL: '',
  // withCredentials: true,
  // timeout: 15000,

  // validateStatus: (status) => status < 500,
};

const axiosClient: AxiosInstance = axios.create(config);

// const mockAdapter = new MockAdapter(axiosClient, { delayResponse: 2000 });

// Object.values(mock).forEach((mockData) => {
//   mockAdapter.onGet(mockData.url, { params: mockData.params }).reply(200, {
//     ...mockData.results,
//   });
// });

// Object.values(mockFail).forEach((mockData) => {
//   mockAdapter.onGet(mockData.url, { params: mockData.params }).reply(200, {
//     ...mockData.results,
//   });
// });

axiosClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  (onFulfilled) => {
    return onFulfilled;
  },
  (error) => {
    console.log('error response', error);
    if (401 === error.code) {
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
