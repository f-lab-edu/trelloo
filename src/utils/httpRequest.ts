import { STORAGE_KEY, URL } from "@/constants";
import { RequestParams } from "@/interfaces/httpRequest";

const headers: HeadersInit = {
  "Content-Type": "application/json; charset=utf-8",
};

const fetchRequest = async <TQueryParams>({
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

  return await fetch(`${isMock ? "" : URL.API}${path}${searchParams ? `?${searchParams}` : ""}`, {
    headers,
    method,
    body: JSON.stringify(params),
  }).then(async (res) => {
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(`status:${res.status} detail:${errorData.code}`);
    }

    return await res.json();
  });
};

const handleRequest = (option?: { isMock: true }) => {
  return {
    async get<TResponse>(params: RequestParams): Promise<TResponse> {
      return await fetchRequest({ ...params, method: "get", ...option });
    },

    async post<TResponse>(params: RequestParams): Promise<TResponse> {
      return await fetchRequest({ ...params, method: "post", ...option });
    },

    async put<TResponse>(params: RequestParams): Promise<TResponse> {
      return await fetchRequest({ ...params, method: "put", ...option });
    },

    async delete<TResponse>(params: RequestParams): Promise<TResponse> {
      return await fetchRequest({ ...params, method: "delete", ...option });
    },
  };
};

export const request = handleRequest();
export const mockedRequest = handleRequest({ isMock: true });
