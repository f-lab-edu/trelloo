import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { request } from "@/utils/httpRequest";
import type * as I from "./interface";

const cardListsKeys = {
  all: ["cardLists"] as const,
  search: (keyword: string) => [...cardListsKeys.all, keyword],
};

export const useCardsQuery = ({ search }: I.GetCardRequest) => {
  return useQuery(
    cardListsKeys.search(search),
    async () => {
      return await request.get<I.GetCardListsResponse[]>({
        path: "/cards",
        queryParams: { search },
        isMock: true,
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
    async (params: I.AddCardRequest) => {
      return await request.post<I.ResponseMessage>({
        path: "/cards",
        params,
        isMock: true,
        shouldAuthorize: true,
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
    async (params: I.EditCardRequest) => {
      return await request.put<I.ResponseMessage>({ path: "/cards", params, isMock: true, shouldAuthorize: true });
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
    async (params: I.DeleteCardRequest) => {
      return await request.delete<I.ResponseMessage>({ path: "/cards", params, isMock: true, shouldAuthorize: true });
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
    async (params: I.AddListRequest) => {
      return await request.post<I.ResponseMessage>({
        path: "/lists",
        params,
        isMock: true,
        shouldAuthorize: true,
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
    async (params: I.EditListRequest) => {
      return await request.put<I.ResponseMessage>({ path: "/lists", params, isMock: true, shouldAuthorize: true });
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
      return await request.put<I.ResponseMessage>({
        path: `/cards/${cardId}/move`,
        params: { destination, source },
        isMock: true,
        shouldAuthorize: true,
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
    async (params: I.DeleteListRequest) => {
      return await request.delete<I.ResponseMessage>({ path: "/lists", params, isMock: true, shouldAuthorize: true });
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(cardListsKeys.all);
      },
    },
  );
};
