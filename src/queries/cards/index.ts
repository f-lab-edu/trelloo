import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { request } from "@/utils/httpRequest";
import type * as I from "./interface";
import { ICardList } from "@/interfaces/cards";

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
    ({ cardId, listId, index }: I.EditCardPositionParam & I.EditCardPositionRequest) => {
      return request.put<I.ResponseMessage>({
        path: `/cards/${cardId}/move`,
        isMock: true,
        params: { listId, index },
      });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
      onMutate: ({ cardId, listId, index }) => {
        const previousData = queryClient.getQueryData<ICardList[]>(cardListsKeys.all);
        if (!previousData) return;

        const previousList = previousData.filter((list) => list.cards.some((card) => card.id === cardId));
        const previousListId = previousList[0].id;
        const card = previousList[0].cards.filter((card) => card.id === cardId)[0];

        const updatedData = previousData.map((list) => {
          if (list.id === listId) {
            const newCards = Array.from(list.cards);
            newCards.splice(index, 0, card);
            return { ...list, cards: newCards };
          } else if (list.id === previousListId) {
            const newCards = Array.from(list.cards);
            newCards.splice(card.index, 1);
            return { ...list, cards: newCards };
          } else {
            return list;
          }
        });

        queryClient.setQueryData(cardListsKeys.all, updatedData);

        return () => queryClient.setQueryData(cardListsKeys.all, previousData);
      },
      onError: (error, variables, rollback) => {
        rollback?.();
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
