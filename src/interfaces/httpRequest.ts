export interface RequestParams<TParams = Params> {
  path: string;
  method?: RequestMethod;
  params?: TParams;
  queryParams?: TParams;
  isMock?: boolean;
  shouldAuthorize?: boolean;
}

export interface MutationOptions {
  onSuccess?: () => void;
  onError?: () => void;
}

export type Params = Record<string, string>;
type RequestMethod = "get" | "post" | "put" | "delete";

export interface Response<TData> {
  code: number;
  data: TData;
}
