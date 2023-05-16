import { useSearchParams } from "react-router-dom";
import { AxiosError } from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SEARCH_PARAMS_KEY } from "@/constants";
import { request } from "@/utils/httpRequest";
import { rearrangeCards } from "@components/Board/utils/rearrangeCards";
import { RequestParams } from "@/interfaces/httpRequest";
import { ICardList } from "@/interfaces/cards";
import * as I from "./interface";

const cardListsKeys = {
  all: ["cardLists"] as const,
  search: (keyword: string) => [...cardListsKeys.all, keyword] as const,
};

export const useCardsQuery = ({ search }: I.GetCardRequest) => {
  const parameter: RequestParams = {
    path: "/cards",
    isMock: true,
  };

  if (search) parameter.queryParams = { search };

  return useQuery(
    cardListsKeys.search(search),
    () => {
      return request.get<I.GetCardListsResponse[]>(parameter);
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

        const currentCards = queryClient.getQueryData<ICardList[]>(cardListsKeys.search(searchKeyword));
        if (!currentCards) return;

        const updatedData = rearrangeCards(currentCards, cardId, listId, index);
        queryClient.setQueryData(cardListsKeys.search(searchKeyword), updatedData);

        return { currentCards };
      },
      onError: (err, currentCards, context) => {
        queryClient.setQueryData(cardListsKeys.all, context?.currentCards);
      },
    },
  );
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
