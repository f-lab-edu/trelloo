export interface ICard {
  id: string;
  description: string;
  index: number;
}

export interface ICardList {
  id: string;
  title: string;
  cards: ICard[];
}
