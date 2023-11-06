import { STORAGE_KEY, URL } from "@/constants";
import { RequestParams } from "@/interfaces/httpRequest";

import axios, { InternalAxiosRequestConfig } from "axios";

export interface MyAxiosRequestConfig extends InternalAxiosRequestConfig {
  includeAuthorization?: boolean;
}

const axiosInstance = axios.create({
  baseURL: "",
});

axiosInstance.interceptors.request.use((config: MyAxiosRequestConfig) => {
  const accessToken = localStorage.getItem(STORAGE_KEY.TOKEN);

  if (config?.headers.includeAuthorization && !!accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export default axiosInstance;

const fetchRequest = <TQueryParams>({
  path,
  method,
  queryParams,
  params,
  isMock,
  config,
}: RequestParams<TQueryParams>) => {
  const convertedParams = queryParams
    ? Object.entries(queryParams).reduce((newObj: Record<string, string>, [key, value]) => {
        newObj[key] = value.toString();
        return newObj;
      }, {})
    : "";

  const searchParams = new URLSearchParams(convertedParams).toString();
  return axiosInstance(`${isMock ? "" : URL.API}${path}?${searchParams}`, {
    headers: config,
    method,
    data: JSON.stringify(params),
  }).then((data) => {
    return data.data;
  });
};

export const request = {
  get<TResponse>(params: RequestParams): Promise<TResponse> {
    return fetchRequest({ ...params, method: "get" });
  },

  post<TResponse>(params: RequestParams): Promise<TResponse> {
    return fetchRequest({ ...params, method: "post" });
  },

  put<TResponse>(params: RequestParams): Promise<TResponse> {
    return fetchRequest({ ...params, method: "put" });
  },

  delete<TResponse>(params: RequestParams): Promise<TResponse> {
    return fetchRequest({ ...params, method: "delete" });
  },
};
