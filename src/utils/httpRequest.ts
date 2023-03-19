import { RequestParams } from "@/interfaces/httpRequest";
import axios from "axios";

const fetchRequest = <TParams>({
  url,
  method,
  params,
  data,
}: RequestParams<TParams>) => {
  const convertedParams = params
    ? Object.entries(params).reduce(
        (newObj: Record<string, string>, [key, value]) => {
          newObj[key] = value.toString();
          return newObj;
        },
        {}
      )
    : "";

  const searchParams = new URLSearchParams(convertedParams).toString();
  return axios(`${url}?${searchParams}`, {
    method,
    data: JSON.stringify(data),
  });
};

export const request = {
  get(params: RequestParams) {
    return fetchRequest({ ...params, method: "get" });
  },

  post(params: RequestParams) {
    return fetchRequest({ ...params, method: "post" });
  },

  put(params: RequestParams) {
    return fetchRequest({ ...params, method: "put" });
  },

  delete(params: RequestParams) {
    return fetchRequest({ ...params, method: "delete" });
  },
};
