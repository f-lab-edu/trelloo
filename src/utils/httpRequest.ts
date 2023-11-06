import axios from "axios";
import { URL } from "@/constants";
import { RequestParams } from "@/interfaces/httpRequest";

const fetchRequest = <TParams>({
  path,
  method,
  params,
  data,
  isMock,
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
  return axios(`${isMock ? "" : URL.API}${path}?${searchParams}`, {
    method,
    data: JSON.stringify(data),
  }).then((data) => {
    return data.data;
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
