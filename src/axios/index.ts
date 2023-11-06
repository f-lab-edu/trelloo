import axios, { AxiosInstance } from "axios";
import { handleInterceptConfig, handleRquestInterceptError } from "./requestIntercepters";
import { handleInterceptResponse, handleResponseInterceptError } from "./responseIntercepters";

const axiosInstance = axios.create({
  headers: {
    common: {
      "Content-Type": "application/json",
    },
  },
});

const setupInterceptors = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.request.use(handleInterceptConfig, handleRquestInterceptError);
  instance.interceptors.response.use(handleInterceptResponse, handleResponseInterceptError);

  return instance;
};

setupInterceptors(axiosInstance);

export default axiosInstance;
