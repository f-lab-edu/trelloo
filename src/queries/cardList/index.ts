import { useMutation, useQuery } from "@tanstack/react-query";
import { request } from "@utils/httpRequest";
import { AddCardRequest, AddListRequest, GetCardListsResponse, ResponseMessage } from "./interface";

const cardListsKeys = {
  all: ["cardLists"] as const,
};

export const useGetCardLists = () => {
  return useQuery(cardListsKeys.all, () => {
    return request.get<GetCardListsResponse[]>({
      path: "/cards/lists",
      isMock: true,
    });
  });
};

export const useAddCardMutation = () => {
  return useMutation(cardListsKeys.all, (params: AddCardRequest) => {
    return request.post<ResponseMessage>({ path: "/cards", isMock: true, params });
  });
};

export const useAddListMutation = () => {
  return useMutation(cardListsKeys.all, (params: AddListRequest) => {
    return request.post<ResponseMessage>({ path: "/list", isMock: true, params });
  });
};
