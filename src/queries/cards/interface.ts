import { ICardList } from "@/interfaces/cards";

export interface GetCardRequest {
  search: string;
}

export interface GetCardListsResponse {
  id: string;
  title: string;
  cards: Array<{
    id: string;
    description: string;
    index: number;
  }>;
}

export interface AddCardRequest {
  description: string;
  listId: string;
}

export interface EditCardRequest {
  id: string;
  description: string;
}

export interface EditCardPositionRequest {
  cardId: string;
  listId: string;
  index: number;
}

export interface EditCardMutationData {
  currentCards: ICardList[];
}

export interface DeleteCardRequest {
  id: string;
}

export interface AddListRequest {
  title: string;
}

export interface EditListRequest {
  id: string;
  title: string;
}

export interface DeleteListRequest {
  id: string;
}

export interface ResponseMessage {
  code: number;
  message: string;
}
