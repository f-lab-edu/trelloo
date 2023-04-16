import axiosInstance from "@/axios";
import { URL } from "@/constants";
import { HandleRequestParams, RequestParams } from "@/interfaces/httpRequest";

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

const handleRequest = (params?: HandleRequestParams) => {
  return {
    get<TResponse>(data: RequestParams): Promise<TResponse> {
      return fetchRequest({ ...data, ...params, method: "get" });
    },

    post<TResponse>(data: RequestParams): Promise<TResponse> {
      return fetchRequest({ ...data, ...params, method: "post" });
    },

    put<TResponse>(data: RequestParams): Promise<TResponse> {
      return fetchRequest({ ...data, ...params, method: "put" });
    },

    delete<TResponse>(data: RequestParams): Promise<TResponse> {
      return fetchRequest({ ...data, ...params, method: "delete" });
    },
  };
};

export const request = handleRequest();

export const authorizedRequest = handleRequest({
  config: {
    includeAuthorization: true,
  },
});

export const mockedRequest = handleRequest({
  isMock: true,
});

export const mockedAuthorizedRequest = handleRequest({
  isMock: true,
  config: {
    includeAuthorization: true,
  },
});
