import { useQuery } from "@tanstack/react-query";
import { request } from "@utils/httpRequest";

export const useGetCardLists = () => {
  return useQuery(["cardLists"], () => {
    return request.get({ url: "/card/list" }).data;
  });
};
