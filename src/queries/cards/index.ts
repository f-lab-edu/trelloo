import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { mockedRequest, mockedAuthorizedRequest } from "@/utils/httpRequest";
import * as I from "./interface";

const cardListsKeys = {
  all: ["cardLists"] as const,
};

export const useCardsQuery = () => {
  return useQuery(
    cardListsKeys.all,
    () => {
      return mockedRequest.get<I.GetCardListsResponse[]>({
        path: "/cards",
      });
    },
    {
      suspense: true,
    },
  );
};

export const useAddCardMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (data: I.AddCardRequest) => {
      return mockedAuthorizedRequest.post<I.ResponseMessage>({
        path: "/cards",
        data,
      });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
    },
  );
};

export const useEditCardMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (data: I.EditCardRequest) => {
      return mockedAuthorizedRequest.put<I.ResponseMessage>({ path: "/cards", data });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
    },
  );
};

export const useDeleteCardMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (data: I.DeleteCardRequest) => {
      return mockedAuthorizedRequest.delete<I.ResponseMessage>({ path: "/cards", data });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
    },
  );
};

export const useAddListMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (data: I.AddListRequest) => {
      return mockedAuthorizedRequest.post<I.ResponseMessage>({
        path: "/lists",
        data,
      });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
    },
  );
};

export const useEditListMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (data: I.EditListRequest) => {
      return mockedAuthorizedRequest.put<I.ResponseMessage>({ path: "/lists", data });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
    },
  );
};

export const useEditCardPositionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ cardId, destination, source }: I.EditCardPositionParam & I.EditCardPositionRequest) => {
      return mockedAuthorizedRequest.put<I.ResponseMessage>({
        path: `/cards/${cardId}/move`,
        data: { destination, source },
      });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
    },
  );
};

export const useDeleteListMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (data: I.DeleteListRequest) => {
      return mockedAuthorizedRequest.delete<I.ResponseMessage>({ path: "/lists", data });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
    },
  );
};
