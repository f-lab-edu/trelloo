/* eslint-disable @typescript-eslint/return-await */
import { STORAGE_KEY, URL } from "@/constants";
import { RequestParams } from "@/interfaces/httpRequest";

const headers: HeadersInit = {
  "Content-Type": "application/json; charset=utf-8",
};

const fetchRequest = <TQueryParams>({
  path,
  method,
  queryParams,
  params,
  isMock,
  shouldAuthorize,
}: RequestParams<TQueryParams>) => {
  const convertedParams = queryParams
    ? Object.entries(queryParams).reduce((newObj: Record<string, string>, [key, value]) => {
        newObj[key] = value.toString();
        return newObj;
      }, {})
    : "";

  const searchParams = new URLSearchParams(convertedParams).toString();

  if (shouldAuthorize) {
    const token = localStorage.getItem(STORAGE_KEY.TOKEN);
    headers.Authorization = token ? `Bearer ${token}` : "";
  }

  return fetch(`${isMock ? "" : URL.API}${path}${searchParams ? `?${searchParams}` : ""}`, {
    headers,
    method,
    body: JSON.stringify(params),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(res.status.toString());
    }

    return res.json();
  });
};

const handleRequest = (option?: { isMock: true }) => {
  return {
    get<TResponse>(params: RequestParams): Promise<TResponse> {
      return fetchRequest({ ...params, method: "get", ...option });
    },

    post<TResponse>(params: RequestParams): Promise<TResponse> {
      return fetchRequest({ ...params, method: "post", ...option });
    },

    put<TResponse>(params: RequestParams): Promise<TResponse> {
      return fetchRequest({ ...params, method: "put", ...option });
    },

    delete<TResponse>(params: RequestParams): Promise<TResponse> {
      return fetchRequest({ ...params, method: "delete", ...option });
    },
  };
};

export const request = handleRequest();
export const mockedRequest = handleRequest({ isMock: true });
