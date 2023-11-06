import { useMutation, useQuery } from "@tanstack/react-query";
import { request } from "@utils/httpRequest";
import {
  AddCardRequest,
  AddListRequest,
  DeleteCardRequest,
  DeleteListRequest,
  EditCardRequest,
  GetCardListsResponse,
  ResponseMessage,
} from "./interface";

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

export const useEditCardMutation = () => {
  return useMutation(cardListsKeys.all, (params: EditCardRequest) => {
    return request.put<ResponseMessage>({ path: "/cards", isMock: true, params });
  });
};

export const useDeleteCardMutation = () => {
  return useMutation(cardListsKeys.all, (params: DeleteCardRequest) => {
    return request.delete<ResponseMessage>({ path: "/card", isMock: true, params });
  });
};

export const useAddListMutation = () => {
  return useMutation(cardListsKeys.all, (params: AddListRequest) => {
    return request.post<ResponseMessage>({ path: "/list", isMock: true, params });
  });
};

export const useDeleteListMutation = () => {
  return useMutation(cardListsKeys.all, (params: DeleteListRequest) => {
    return request.delete<ResponseMessage>({ path: "/list", isMock: true, params });
  });
};
