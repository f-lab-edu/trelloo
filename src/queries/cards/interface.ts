export interface GetCardRequest {
  search: string;
}

export interface GetCardListsResponse {
  id: string;
  title: string;
  cards: Array<{
    id: string;
    description: string;
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
  destination: {
    listId: string;
    index: number;
  };
  source: {
    listId: string;
    index: number;
  };
}

export interface EditCardPositionParam {
  cardId: string;
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
  message: string;
}
