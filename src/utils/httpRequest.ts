import axiosInstance from "@/axios";
import { URL } from "@/constants";
import { RequestParams } from "@/interfaces/httpRequest";

const fetchRequest = <TQueryParams>({ path, method, params, data, isMock, config }: RequestParams<TQueryParams>) => {
  return axiosInstance(`${isMock ? "" : URL.API}${path}`, {
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
