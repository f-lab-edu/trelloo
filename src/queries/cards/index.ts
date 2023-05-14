import { useSearchParams } from "react-router-dom";
import { AxiosError } from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { request } from "@/utils/httpRequest";
import * as I from "./interface";
import { ICard, ICardList } from "@/interfaces/cards";
import { SEARCH_PARAMS_KEY } from "@/constants";

const cardListsKeys = {
  all: ["cardLists"] as const,
  search: (keyword: string) => [...cardListsKeys.all, keyword] as const,
};

export const useCardsQuery = ({ search }: I.GetCardRequest) => {
  return useQuery(
    cardListsKeys.search(search),
    () => {
      return request.get<I.GetCardListsResponse[]>({
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
    (params: I.AddCardRequest) => {
      return request.post<I.ResponseMessage>({
        path: "/cards",
        params,
        isMock: true,
        shouldAuthorize: true,
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
    (params: I.EditCardRequest) => {
      return request.put<I.ResponseMessage>({ path: "/cards", params, isMock: true, shouldAuthorize: true });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
    },
  );
};

export const useDeleteCardMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (params: I.DeleteCardRequest) => {
      return request.delete<I.ResponseMessage>({ path: "/cards", params, isMock: true, shouldAuthorize: true });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
    },
  );
};

export const useAddListMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (params: I.AddListRequest) => {
      return request.post<I.ResponseMessage>({
        path: "/lists",
        params,
        isMock: true,
        shouldAuthorize: true,
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
    (params: I.EditListRequest) => {
      return request.put<I.ResponseMessage>({ path: "/lists", params, isMock: true, shouldAuthorize: true });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
    },
  );
};
export const useEditCardPositionMutation = () => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams(window.location.search);
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
        const searchKeyword = searchParams.get(SEARCH_PARAMS_KEY.SEARCH) ?? "";
        queryClient.cancelQueries(cardListsKeys.search(searchKeyword));

        const currentCards = queryClient.getQueryData<ICardList[]>(cardListsKeys.search(searchKeyword), {
          exact: false,
        });
        if (!currentCards) return;

        const updatedData = createNewCardList(currentCards, cardId, listId, index);
        queryClient.setQueryData(cardListsKeys.search(searchKeyword), updatedData);

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
    (params: I.DeleteListRequest) => {
      return request.delete<I.ResponseMessage>({ path: "/lists", params, isMock: true, shouldAuthorize: true });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
    },
  );
};
