import { STORAGE_KEY, URL } from "@/constants";
import { RequestParams } from "@/interfaces/httpRequest";

const headers: HeadersInit = {
  "Content-Type": "application/json; charset=utf-8",
};

const fetchRequest = <TParams>({
  path,
  method,
  queryParams,
  params,
  isMock,
  shouldAuthorize,
}: RequestParams<TParams>) => {
  const convertedParams = queryParams
    ? Object.entries(queryParams).reduce((newObj: Record<string, string>, [key, value]) => {
        if (typeof value === "string") {
          newObj[key] = value;
        } else if (typeof value === "number") {
          newObj[key] = value.toString();
        }
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
    if (res.status >= 200 && res.status < 300) {
      return res.json();
    }

    throw new Error(res.status.toString());
  });
};

const handleRequest = (option?: { isMock: true }) => {
  return {
    get<TParams, TResponse>(params: RequestParams<TParams>): Promise<TResponse> {
      return fetchRequest<TParams>({ ...params, method: "get", ...option });
    },

    post<TParams, TResponse>(params: RequestParams<TParams>): Promise<TResponse> {
      return fetchRequest({ ...params, method: "post", ...option });
    },

    put<TParams, TResponse>(params: RequestParams<TParams>): Promise<TResponse> {
      return fetchRequest({ ...params, method: "put", ...option });
    },

    delete<TParams, TResponse>(params: RequestParams<TParams>): Promise<TResponse> {
      return fetchRequest({ ...params, method: "delete", ...option });
    },
  };
};

export const request = handleRequest();
export const mockedRequest = handleRequest({ isMock: true });
