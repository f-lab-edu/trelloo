import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { request } from "@utils/httpRequest";
import {
  AddCardRequest,
  AddListRequest,
  DeleteCardRequest,
  DeleteListRequest,
  EditCardRequest,
  EditListRequest,
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
  const queryClient = useQueryClient();
  return useMutation(
    cardListsKeys.all,
    (params: AddCardRequest) => {
      return request.post<ResponseMessage>({ path: "/cards", isMock: true, params });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
    },
  );
};

export const useEditCardMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    cardListsKeys.all,
    (params: EditCardRequest) => {
      return request.put<ResponseMessage>({ path: "/cards", isMock: true, params });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
    },
  );
};

export const useDeleteCardMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    cardListsKeys.all,
    (params: DeleteCardRequest) => {
      return request.delete<ResponseMessage>({ path: "/card", isMock: true, params });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
    },
  );
};

export const useAddListMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    cardListsKeys.all,
    (params: AddListRequest) => {
      return request.post<ResponseMessage>({ path: "/list", isMock: true, params });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
    },
  );
};

export const useEditListMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    cardListsKeys.all,
    (params: EditListRequest) => {
      return request.put<ResponseMessage>({ path: "/list", isMock: true, params });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
    },
  );
};

export const useDeleteListMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    cardListsKeys.all,
    (params: DeleteListRequest) => {
      return request.delete<ResponseMessage>({ path: "/list", isMock: true, params });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
    },
  );
};
