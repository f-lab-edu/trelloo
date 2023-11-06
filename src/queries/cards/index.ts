import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { request } from "@utils/httpRequest";
import {
  AddCardRequest,
  AddListRequest,
  DeleteCardRequest,
  DeleteListRequest,
  EditCardPositionParam,
  EditCardPositionRequest,
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
    (data: AddCardRequest) => {
      return request.post<ResponseMessage>({
        path: "/cards",
        isMock: true,
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
    (data: EditCardRequest) => {
      return request.put<ResponseMessage>({ path: "/cards", isMock: true, data });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
    },
  );
};

export const useDeleteCardMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (data: DeleteCardRequest) => {
      return request.delete<ResponseMessage>({ path: "/cards", isMock: true, data });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
    },
  );
};

export const useAddListMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (data: AddListRequest) => {
      return request.post<ResponseMessage>({
        path: "/lists",
        isMock: true,
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
    (data: EditListRequest) => {
      return request.put<ResponseMessage>({ path: "/lists", isMock: true, data });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
    },
  );
};

export const useEditCardPositionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ cardId, destination, source }: EditCardPositionParam & EditCardPositionRequest) => {
      return request.put<ResponseMessage>({
        path: `/cards/${cardId}/move`,
        isMock: true,
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
    (data: DeleteListRequest) => {
      return request.delete<ResponseMessage>({ path: "/lists", isMock: true, data });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
    },
  );
};
