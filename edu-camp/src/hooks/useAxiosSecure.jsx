import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://a-11-server-five.vercel.app',
  withCredentials: true,
});

// Add interceptors ONCE
axiosInstance.interceptors.request.use(config => {
  config.withCredentials = true;
  return config;
});

const useAxiosSecure = () => axiosInstance;

export default useAxiosSecure;