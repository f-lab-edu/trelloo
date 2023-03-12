import {
  useQuery as baseUseQuery,
  useMutation as baseUseMutation,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";

interface AxiosParams<TParams = Params, TData = {}> {
  url: string;
  method?: AxiosMethod;
  data?: TData;
  params?: TParams;
}

interface HandleUseQueryParams<TParams = Params, TData = object> {
  key: string;
  url: string;
  params?: TParams;
  options?: AxiosOptions<TData>;
}

interface HandleUseMutationParams<TParams = Params, TData = object> {
  key?: string;
  url: string;
  method: AxiosMethod;
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

export const handleUseQuery = <TParams, TData>({
  key,
  url,
  options,
}: HandleUseQueryParams<TParams, TData>) => {
  return baseUseQuery(
    [key],
    () => {
      return request({ url });
    },
    {
      onSuccess: (data: TData) => options?.onSuccess?.(data),
      onError: (err: Error) => options?.onError?.(err),
    }
  );
};

export const handleUseMutation = <TParams, TData>({
  key,
  url,
  params,
  method,
  options,
}: HandleUseMutationParams<TParams, TData>) => {
  const queryClient = useQueryClient();

  return baseUseMutation(
    async (data: TData) => {
      const response = await request({ url, params, method, data });
      return response.data;
    },
    {
      onSuccess: (data: TData) => {
        options?.onSuccess?.(data);
        key && queryClient.invalidateQueries([key]);
      },
      onError: (err: Error) => options?.onError?.(err),
    }
  );
};
