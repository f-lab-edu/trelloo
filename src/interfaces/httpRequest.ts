export interface RequestParams<TParams = Params, TData = {}> {
  url: string;
  method?: RequestMethod;
  data?: TData;
  params?: TParams;
}

export type Params = Record<string, string>;
type RequestMethod = "get" | "post" | "put" | "delete";

export interface RequestOptions<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (error: Error) => void;
}

export interface HandleUseQueryParams<TParams = Params, TData = object> {
  key: string;
  url: string;
  params?: TParams;
  options?: RequestOptions<TData>;
}

export interface HandleUseMutationParams<
  TParams = Params,
  TData = object,
  TRes = object
> {
  key?: string;
  url: string;
  method: RequestMethod;
  params?: TParams;
  data?: TData;
  options?: RequestOptions<TRes>;
  res?: TRes;
}

export interface HandleUseMutationRes {
  message: string;
}
