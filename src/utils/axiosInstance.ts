import axios from 'axios';
import SInfo from 'react-native-sensitive-info';
import Config from 'react-native-config';

const axiosInstance = axios.create({
  baseURL: Config.API_URL,
  timeout: 3000,
  timeoutErrorMessage: 'Server is down. Please try after sometime.',
});

axiosInstance.interceptors.request.use(
  async function (config) {
    // Do something before request is sent
    const token = await SInfo.getItem('@coforgeAuthToken', {
      sharedPreferencesName: Config.SHARED_PREFERENCES_NAME,
      keychainService: Config.KEYCHAIN_SERVICE,
    });

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default axiosInstance;
