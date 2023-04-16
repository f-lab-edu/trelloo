import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { mockedAuthorizedRequest, mockedRequest } from "@/utils/httpRequest";
import {} from "@utils/httpRequest";
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
  return useQuery(
    cardListsKeys.all,
    () => {
      return mockedRequest.get<GetCardListsResponse[]>({
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
    (data: AddCardRequest) => {
      return mockedAuthorizedRequest.post<ResponseMessage>({
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
    (data: EditCardRequest) => {
      return mockedRequest.put<ResponseMessage>({ path: "/cards", data });
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
      return mockedRequest.delete<ResponseMessage>({ path: "/cards", data });
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
      return mockedRequest.post<ResponseMessage>({
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
    (data: EditListRequest) => {
      return mockedRequest.put<ResponseMessage>({ path: "/lists", data });
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
      return mockedRequest.put<ResponseMessage>({
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
    (data: DeleteListRequest) => {
      return mockedRequest.delete<ResponseMessage>({ path: "/lists", data });
    },
    {
      onSuccess: () => queryClient.invalidateQueries(cardListsKeys.all),
    },
  );
};
