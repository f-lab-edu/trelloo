export interface RequestParams<TParams = data, TData = {}> {
  path: string;
  method?: RequestMethod;
  data?: TData;
  params?: TParams;
  isMock?: boolean;
}

export type data = Record<string, string>;
type RequestMethod = "get" | "post" | "put" | "delete";

export interface RequestOptions<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (error: Error) => void;
}

export interface HandleUseQueryParams<TParams = data, TData = object> {
  key: string;
  path: string;
  params?: TParams;
  options?: RequestOptions<TData>;
}

export interface HandleUseMutationParams<TParams = data, TData = object, TRes = object> {
  key?: string;
  path: string;
  method: RequestMethod;
  params?: TParams;
  data?: TData;
  options?: RequestOptions<TRes>;
  res?: TRes;
}

export interface HandleUseMutationRes {
  message: string;
}
