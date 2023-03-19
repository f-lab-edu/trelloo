import axios from "axios";
import { URL } from "@/constants";
import { RequestParams } from "@/interfaces/httpRequest";

const fetchRequest = <TQueryParams>({
  path,
  method,
  queryParams,
  params,
  isMock,
}: RequestParams<TQueryParams>) => {
  const convertedParams = queryParams
    ? Object.entries(queryParams).reduce(
        (newObj: Record<string, string>, [key, value]) => {
          newObj[key] = value.toString();
          return newObj;
        },
        {}
      )
    : "";

  const searchParams = new URLSearchParams(convertedParams).toString();
  return axios(`${isMock ? "" : URL.API}${path}?${searchParams}`, {
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
