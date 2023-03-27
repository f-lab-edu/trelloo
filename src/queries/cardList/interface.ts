export interface GetCardListsResponse {
  id: string;
  title: string;
  cards: {
    id: string;
    text: string;
  }[];
}

export interface ResponseMessage {
  message: string;
}
