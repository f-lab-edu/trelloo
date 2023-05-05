export interface RequestParams<TQueryParams = Params, TParams = any> {
  path: string;
  method?: RequestMethod;
  params?: TParams;
  queryParams?: TQueryParams;
  isMock?: boolean;
  shouldAuthorize?: boolean;
}

export interface MutationOptions {
  onSuccess?: () => void;
  onError?: () => void;
}

export type Params = Record<string, string>;
type RequestMethod = "get" | "post" | "put" | "delete";
