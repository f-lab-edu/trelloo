export interface RequestParams<TQueryParams = Params, TParams = {}> {
  path: string;
  method?: RequestMethod;
  params?: TParams;
  queryParams?: TQueryParams;
  isMock?: boolean;
}

export type Params = Record<string, string>;
type RequestMethod = "get" | "post" | "put" | "delete";

export interface RequestOptions<TParams> {
  onSuccess?: (data: TParams) => void;
  onError?: (error: Error) => void;
}

export interface HandleUseQueryParams<TQueryParams = Params, TParams = object> {
  key: string;
  path: string;
  queryParams?: TQueryParams;
  options?: RequestOptions<TParams>;
}

export interface HandleUseMutationParams<TQueryParams = Params, TParams = object, TRes = object> {
  key?: string;
  path: string;
  method: RequestMethod;
  queryParams?: TQueryParams;
  params?: TParams;
  options?: RequestOptions<TRes>;
  res?: TRes;
}

export interface HandleUseMutationRes {
  message: string;
}
