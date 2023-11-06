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

  if (config?.headers.includeAuthorization && !!token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  delete config.headers.includeAuthorization;
  return config;
};

const fetchRequest = <TQueryParams>({ path, method, params, data, isMock, config }: RequestParams<TQueryParams>) => {
  return instance(`${isMock ? "" : URL.API}${path}`, {
    headers: config,
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

export const authorizedRequest = {
  get<TResponse>(data: RequestParams): Promise<TResponse> {
    return fetchRequest({
      ...data,
      method: "get",
      config: {
        includeAuthorization: true,
      },
    });
  },

  post<TResponse>(data: RequestParams): Promise<TResponse> {
    return fetchRequest({
      ...data,
      method: "post",
      config: {
        includeAuthorization: true,
      },
    });
  },

  put<TResponse>(data: RequestParams): Promise<TResponse> {
    return fetchRequest({
      ...data,
      method: "put",
      config: {
        includeAuthorization: true,
      },
    });
  },

  delete<TResponse>(data: RequestParams): Promise<TResponse> {
    return fetchRequest({
      ...data,
      method: "delete",
      config: {
        includeAuthorization: true,
      },
    });
  },
};
