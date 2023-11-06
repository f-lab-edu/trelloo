type RequestMethod = "get" | "post" | "put" | "delete";

export type data = Record<string, string>;

export type HandleRequestParams = Pick<RequestParams, "isMock" | "config">;

export interface RequestParams<TParams = data, TData = {}> {
  path: string;
  method?: RequestMethod;
  data?: TData;
  params?: TParams;
  isMock?: boolean;
  config?: {
    includeAuthorization?: boolean;
  };
}
