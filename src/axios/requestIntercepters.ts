import { STORAGE_KEY } from "@/constants";
import axiosInstance from "./instance";

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(STORAGE_KEY.TOKEN);
    config.headers.Authorization = !!token ? `Bearer ${token}` : "";
    return config;
  },
  (error) => Promise.reject(error),
);
