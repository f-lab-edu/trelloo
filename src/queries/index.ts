import {
  useQuery as baseUseQuery,
  useMutation as baseUseMutation,
} from "@tanstack/react-query";
import axios from "axios";

interface AxiosParams<TParams = Params, TData = object> {
  url: string;
  method?: AxiosMethod;
  params?: TParams;
  data?: TData;
  options?: AxiosOptions<TData>;
}

export type Params = Record<string, string>;
type AxiosMethod = "get" | "post" | "put" | "delete";

export interface AxiosOptions<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (error: Error) => void;
}

export const request = <TParams, TData = object>({
  url,
  method,
  params,
  data,
  options,
}: AxiosParams<TParams, TData>) => {
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

export const handleUseQuery = ({ key, url }: { key: string; url: string }) => {
  return baseUseQuery([key], () => {
    return request({ url });
  });
};

export const handleUseMutation = ({ url, method }: AxiosParams) => {
  return baseUseMutation((data: any) => {
    return request({ url, method, data });
  });
};
