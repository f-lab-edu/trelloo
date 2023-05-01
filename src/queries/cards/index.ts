import { type AxiosError } from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { request } from "@/utils/httpRequest";
import type * as I from "./interface";
import { type ICard, type ICardList } from "@/interfaces/cards";

const cardListsKeys = {
  all: ["cardLists"] as const,
  search: (keyword: string) => [...cardListsKeys.all, keyword],
};

export const useCardsQuery = ({ search }: I.GetCardRequest) => {
  return useQuery(
    cardListsKeys.all,
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
  return useMutation<I.ResponseMessage, AxiosError, I.EditCardPositionRequest, I.EditCardMutationData>(
    async ({ cardId, listId, index }: I.EditCardPositionRequest) => {
      return await request.put<I.ResponseMessage>({
        path: `/cards/${cardId}/move`,
        isMock: true,
        params: { listId, index },
        shouldAuthorize: true,
      });
    },
    {
      onSuccess: async () => { await queryClient.invalidateQueries(cardListsKeys.all); },
      onMutate: async ({ cardId, listId, index }) => {
        await queryClient.cancelQueries(cardListsKeys.all);

        const currentCards = queryClient.getQueryData<ICardList[]>(cardListsKeys.all);
        if (!currentCards) return;

        const updatedData = createNewCardList(currentCards, cardId, listId, index);
        queryClient.setQueryData(cardListsKeys.all, updatedData);

        return { currentCards };
      },
      // eslint-disable-next-line n/handle-callback-err
      onError: (err, currentCards, context) => {
        queryClient.setQueryData(cardListsKeys.all, context?.currentCards);
      },
    },
  );
};

const createNewCardList = (currentCards: ICardList[], cardId: string, listId: string, index: number) => {
  const currentCardsList = currentCards.filter((list) => list.cards.some((card) => card.id === cardId));
  const currentListId = currentCardsList[0].id;
  const card = currentCardsList[0].cards.filter((card) => card.id === cardId)[0];

  const updatedData = currentCards.map((list) => {
    const hasMatchedListId = list.id === listId;
    const hasCardInList = list.id === currentListId;

    if (hasMatchedListId) {
      return addMovedCardToList(list, card, index);
    }

    if (hasCardInList) {
      return removeMovedCardFromList(list, cardId);
    }

    return list;
  });

  return updatedData;
};

const addMovedCardToList = (list: ICardList, card: ICard, index: number) => {
  const newCards = Array.from(list.cards);
  newCards.splice(index, 0, card);
  return { ...list, cards: newCards };
};

const removeMovedCardFromList = (list: ICardList, cardId: string) => {
  const filteredCards = list.cards.filter((card) => card.id !== cardId);
  return { ...list, cards: filteredCards };
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
