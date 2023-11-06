import axiosInstance from "@/axios";
import { URL } from "@/constants";
import { type HandleRequestParams, type RequestParams } from "@/interfaces/httpRequest";

const fetchRequest = async <TQueryParams>({ path, method, params, data, isMock, config }: RequestParams<TQueryParams>) => {
  return await axiosInstance(`${isMock ?? true ? "" : URL.API}${path}`, {
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
    async get<TResponse>(data: RequestParams): Promise<TResponse> {
      return await fetchRequest({ ...data, ...params, method: "get" });
    },

    async post<TResponse>(data: RequestParams): Promise<TResponse> {
      return await fetchRequest({ ...data, ...params, method: "post" });
    },

    async put<TResponse>(data: RequestParams): Promise<TResponse> {
      return await fetchRequest({ ...data, ...params, method: "put" });
    },

    async delete<TResponse>(data: RequestParams): Promise<TResponse> {
      return await fetchRequest({ ...data, ...params, method: "delete" });
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
