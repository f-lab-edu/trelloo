import { AxiosError } from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { request } from "@/utils/httpRequest";
import * as I from "./interface";
import { ICard, ICardList } from "@/interfaces/cards";

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
  return useMutation<I.ResponseMessage, AxiosError, I.EditCardPositionRequest, I.EditCardMutationData>(
    ({ cardId, listId, index }: I.EditCardPositionRequest) => {
      return request.put<I.ResponseMessage>({
        path: `/cards/${cardId}/move`,
        isMock: true,
        params: { listId, index },
        shouldAuthorize: true,
      });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
      onMutate: ({ cardId, listId, index }) => {
        queryClient.cancelQueries(cardListsKeys.all);

        const currentCards = queryClient.getQueryData<ICardList[]>(cardListsKeys.all);
        if (!currentCards) return;

        const updatedData = createNewCardList(currentCards, cardId, listId, index);
        queryClient.setQueryData(cardListsKeys.all, updatedData);

        return { currentCards };
      },
      onError: (err, currentCards, context) => {
        queryClient.setQueryData(cardListsKeys.all, context?.currentCards);
      },
    },
  );
};

const createNewCardList = (currentCardList: ICardList[], cardId: string, listId: string, index: number) => {
  const currentCardsList = currentCardList.find((cardList) => cardList.cards.some((card) => card.id === cardId));
  const currentListId = currentCardsList?.id;
  const card = currentCardsList?.cards.find((card) => card.id === cardId);
  if (!card) return;

  const updatedCardLists = currentCardList.map((cardList) => {
    const isDroppedList = cardList.id === listId;
    const isDraggedList = cardList.id === currentListId;
    const isMovedToSameList = isDroppedList && isDraggedList;

    if (isMovedToSameList) {
      return reorderCardInList(cardList, card, cardId, index);
    }

    if (isDroppedList) {
      return addCardToList(cardList, card, index);
    }

    if (isDraggedList) {
      return removeCardFromList(cardList, cardId);
    }

    return cardList;
  });

  return updatedCardLists;
};

const reorderCardInList = (cardList: ICardList, card: ICard, cardId: string, index: number) => {
  const filteredCardList = removeCardFromList(cardList, cardId);
  return addCardToList(filteredCardList, card, index);
};

const addCardToList = (cardList: ICardList, card: ICard, index: number) => {
  const newCards = Array.from(cardList.cards);
  newCards.splice(index, 0, card);
  return { ...cardList, cards: newCards };
};

const removeCardFromList = (cardList: ICardList, cardId: string) => {
  const filteredCards = cardList.cards.filter((card) => card.id !== cardId);
  return { ...cardList, cards: filteredCards };
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
