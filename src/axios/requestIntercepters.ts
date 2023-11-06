import { InternalAxiosRequestConfig } from "axios";
import { STORAGE_KEY } from "@/constants";

export const handleInterceptConfig = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem(STORAGE_KEY.TOKEN);

  if (config?.headers.includeAuthorization && !!token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  delete config.headers.includeAuthorization;
  return config;
};

export const handleRquestInterceptError = (error: any) => {
  return Promise.reject(error);
};
