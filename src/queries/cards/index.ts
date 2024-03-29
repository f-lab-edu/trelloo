import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SEARCH_PARAMS_KEY, DETAIL_CODE, STATUS_CODE } from "@/constants";
import { request } from "@/utils/httpRequest";
import { handleError, handleThrowError } from "@utils/handleError";
import { ICardList } from "@/interfaces/cards";
import { rearrangeCards } from "@components/Board/utils/rearrangeCards";
import { RequestParams } from "@/interfaces/httpRequest";

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
      return request.get<I.GetCardRequest, I.ResponseData<I.GetCardListsResponse[]>>({

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

  const errorHandlers: Record<string, () => void> = {
    [DETAIL_CODE[700]]() {
      toast.error("카드 생성에 실패했습니다.\n잠시 후 다시 시도해주세요.");
    },
  };

  return useMutation(
    (params: I.AddCardRequest) => {
      return request.post<I.AddCardRequest, I.ResponseMessage>({
        path: "/cards",
        params,
        isMock: true,
        shouldAuthorize: true,
      });
    },
    {
      onSuccess: ({ code }: { code: number }) => {
        handleThrowError(code);
        queryClient.invalidateQueries(cardListsKeys.all);
      },
      onError: (err) => {
        const error = err as Error;
        handleError(error.message, errorHandlers);
      },
    },
  );
};

export const useEditCardMutation = () => {
  const queryClient = useQueryClient();

  const errorHandlers: Record<string, () => void> = {
    [STATUS_CODE[500]]() {
      toast.error("카드 텍스트 수정에 실패했습니다.\n잠시 후 다시 시도해주세요.");
    },
  };

  return useMutation(
    (params: I.EditCardRequest) => {
      return request.put<I.EditCardRequest, I.ResponseMessage>({
        path: "/cards",
        params,
        isMock: true,
        shouldAuthorize: true,
      });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
      onError: (err) => {
        const error = err as Error;
        handleError(error.message, errorHandlers);
      },
    },
  );
};

export const useDeleteCardMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (params: I.DeleteCardRequest) => {
      return request.delete<I.DeleteCardRequest, I.ResponseMessage>({
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

export const useAddListMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (params: I.AddListRequest) => {
      return request.post<I.AddListRequest, I.ResponseMessage>({
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
      return request.put<I.EditListRequest, I.ResponseMessage>({
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
export const useEditCardPositionMutation = () => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  return useMutation(
    ({ cardId, listId, index }: I.EditCardPositionRequest) => {
      return request.put<Omit<I.EditCardPositionRequest, "cardId">, I.ResponseMessage>({
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
      return request.delete<I.DeleteListRequest, I.ResponseMessage>({
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
