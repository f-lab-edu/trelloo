export interface ICard {
  id: string;
  description: string;
}

export interface ICardList {
  id: string;
  title: string;
  cards: ICard[];
}
