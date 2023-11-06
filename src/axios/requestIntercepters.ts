import { InternalAxiosRequestConfig } from "axios";
import { STORAGE_KEY } from "@/constants";
import axiosInstance from "./instance";

axiosInstance.interceptors.request.use(
  (config) => handleRequestIntercept(config),
  (error) => Promise.reject(error),
);

const handleRequestIntercept = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem(STORAGE_KEY.TOKEN);

  if (config?.headers.includeAuthorization && !!token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  delete config.headers.includeAuthorization;
  return config;
};
