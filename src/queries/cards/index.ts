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

export const useCardsQuery = () => {
  return useQuery(cardListsKeys.all, () => {
    return request.get<GetCardListsResponse[]>({
      path: "/cards",
      isMock: true,
    });
  });
};

export const useAddCardMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
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
    (params: DeleteCardRequest) => {
      return request.delete<ResponseMessage>({ path: "/cards", isMock: true, params });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
    },
  );
};

export const useAddListMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (params: AddListRequest) => {
      return request.post<ResponseMessage>({ path: "/lists", isMock: true, params });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
    },
  );
};

export const useEditListMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (params: EditListRequest) => {
      return request.put<ResponseMessage>({ path: "/lists", isMock: true, params });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
    },
  );
};

export const useDeleteListMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (params: DeleteListRequest) => {
      return request.delete<ResponseMessage>({ path: "/lists", isMock: true, params });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
    },
  );
};
