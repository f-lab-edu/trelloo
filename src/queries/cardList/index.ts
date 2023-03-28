import { useMutation, useQuery } from "@tanstack/react-query";
import { request } from "@utils/httpRequest";
import { AddCardRequest, GetCardListsResponse, ResponseMessage } from "./interface";

const queryKeys = {
  all: ["cardLists"],
};

export const useGetCardLists = () => {
  return useQuery(queryKeys.all, () => {
    return request.get<GetCardListsResponse[]>({
      path: "/cards/lists",
      isMock: true,
    });
  });
};

export const useAddCardMutation = () => {
  return useMutation(queryKeys.all, (params: AddCardRequest) => {
    return request.post<ResponseMessage>({ path: "/cards", isMock: true, params });
  });
};
