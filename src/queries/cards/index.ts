import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { mockedRequest, mockedAuthorizedRequest } from "@/utils/httpRequest";
import type * as I from "./interface";

const cardListsKeys = {
  all: ["cardLists"] as const,
};

export const useCardsQuery = () => {
  return useQuery(
    cardListsKeys.all,
    async () => {
      return await mockedRequest.get<I.GetCardListsResponse[]>({
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
    async (data: I.AddCardRequest) => {
      return await mockedAuthorizedRequest.post<I.ResponseMessage>({
        path: "/cards",
        data,
      });
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(cardListsKeys.all);
      },
    },
  );
};

export const useEditCardMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (data: I.EditCardRequest) => {
      return await mockedAuthorizedRequest.put<I.ResponseMessage>({ path: "/cards", data });
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(cardListsKeys.all);
      },
    },
  );
};

export const useDeleteCardMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (data: I.DeleteCardRequest) => {
      return await mockedAuthorizedRequest.delete<I.ResponseMessage>({ path: "/cards", data });
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(cardListsKeys.all);
      },
    },
  );
};

export const useAddListMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (data: I.AddListRequest) => {
      return await mockedAuthorizedRequest.post<I.ResponseMessage>({
        path: "/lists",
        data,
      });
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(cardListsKeys.all);
      },
    },
  );
};

export const useEditListMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (data: I.EditListRequest) => {
      return await mockedAuthorizedRequest.put<I.ResponseMessage>({ path: "/lists", data });
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(cardListsKeys.all);
      },
    },
  );
};

export const useEditCardPositionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ cardId, destination, source }: I.EditCardPositionParam & I.EditCardPositionRequest) => {
      return await mockedAuthorizedRequest.put<I.ResponseMessage>({
        path: `/cards/${cardId}/move`,
        data: { destination, source },
      });
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(cardListsKeys.all);
      },
    },
  );
};

export const useDeleteListMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (data: I.DeleteListRequest) => {
      return await mockedAuthorizedRequest.delete<I.ResponseMessage>({ path: "/lists", data });
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(cardListsKeys.all);
      },
    },
  );
};
