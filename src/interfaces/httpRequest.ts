export interface RequestParams<TQueryParams = Params, TParams = {}> {
  path: string;
  method?: RequestMethod;
  params?: TParams;
  queryParams?: TQueryParams;
  isMock?: boolean;
  shouldAuthorize?: boolean;
}

export type Params = Record<string, string>;
type RequestMethod = "get" | "post" | "put" | "delete";
