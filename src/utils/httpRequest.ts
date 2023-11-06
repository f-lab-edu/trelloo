import axios, { InternalAxiosRequestConfig } from "axios";
import { STORAGE_KEY, URL } from "@/constants";
import { RequestParams } from "@/interfaces/httpRequest";

const instance = axios.create({
  baseURL: "",
  headers: {
    common: {
      "Content-Type": "application/json",
    },
  },
});

instance.interceptors.request.use(
  (config) => handleRequestIntercept(config),
  (error) => Promise.reject(error),
);

const handleRequestIntercept = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem(STORAGE_KEY.TOKEN);
  config.headers.Authorization = !!token ? `Bearer ${token}` : "";
  return config;
};

const fetchRequest = <TQueryParams>({ path, method, params, data, isMock }: RequestParams<TQueryParams>) => {
  return instance(`${isMock ? "" : URL.API}${path}`, {
    method,
    data: JSON.stringify(data),
    params,
  }).then((res) => {
    return res.data;
  });
};

export const request = {
  get<TResponse>(data: RequestParams): Promise<TResponse> {
    return fetchRequest({ ...data, method: "get" });
  },

  post<TResponse>(data: RequestParams): Promise<TResponse> {
    return fetchRequest({ ...data, method: "post" });
  },

  put<TResponse>(data: RequestParams): Promise<TResponse> {
    return fetchRequest({ ...data, method: "put" });
  },

  delete<TResponse>(data: RequestParams): Promise<TResponse> {
    return fetchRequest({ ...data, method: "delete" });
  },
};
