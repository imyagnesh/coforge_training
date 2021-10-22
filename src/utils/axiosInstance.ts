import axios, {
  AxiosInstance,
  AxiosRequestConfig,
} from 'axios';

const config: AxiosRequestConfig = {
  baseURL: 'http://localhost:3000',
  timeout: 3000,
  timeoutErrorMessage:
    'Server is down. Please try after sometime',
};

const client: AxiosInstance = axios.create(config);

// client.interceptors.request.use(
//   config => {
//     // Do something before request is sent
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers['Authorization'] = token;
//     }
//     return config;
//   },
//   error =>
//     // Do something with request error
//     Promise.reject(error),
// );

// // Add a response interceptor
// client.interceptors.response.use(
//   response =>
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     response,
//   error => {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     // google => { status: 'fail', message: ''}
//     // if(google){
//     // Promise.reject(error.message)
//     // }
//     // facebook => { errorMessages: ['']}
//     // if(facebook){
//     // Promise.reject(error.errormessages.reduce((p,c) => p + c + "\n", ""))
//     // }
//     return Promise.reject(error);
//   },
// );

export default client;
