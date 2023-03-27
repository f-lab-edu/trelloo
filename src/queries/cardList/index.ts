import { useMutation, useQuery } from "@tanstack/react-query";
import { request } from "@utils/httpRequest";
import { GetCardListsResponse, ResponseMessage } from "./interface";

const queryKeys = {
  all: ["cardLists"],
};

interface AddCardRequest {
  text: string;
  listTitle: string;
}

export const useGetCardLists = () => {
  return useQuery(queryKeys.all, () => {
    return request.get<GetCardListsResponse[]>({
      path: "/cards/lists",
      isMock: true,
    });
  });
};

export const useAddCardMutation = () => {
  return useMutation(queryKeys.all, (params: AddCardRequest) => {
    return request.post<ResponseMessage>({ path: "/cards", isMock: true, params });
  });
};
