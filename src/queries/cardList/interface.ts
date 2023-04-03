export interface GetCardListsResponse {
  id: string;
  title: string;
  cards: {
    id: string;
    text: string;
  }[];
}

export interface AddCardRequest {
  text: string;
  listId: string;
}

export interface EditCardRequest {
  id: string;
  text: string;
}

export interface DeleteCardRequest {
  id: string;
}

export interface AddListRequest {
  title: string;
}

export interface DeleteListRequest {
  id: string;
}

export interface ResponseMessage {
  message: string;
}
