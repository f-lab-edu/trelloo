import { useMutation, useQuery } from "@tanstack/react-query";
import { request } from "@utils/httpRequest";

const queryKeys = {
  all: ["cardLists"],
};

export const useGetCardLists = () => {
  return useQuery(queryKeys.all, () => {
    return request.get({ path: "/card/list", isMock: true });
  });
};

export const useAddCardMutation = () => {
  return useMutation(queryKeys.all, () => {
    return request.post({ path: "/card/list", isMock: true });
  });
};
