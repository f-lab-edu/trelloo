export interface ICard {
  id: string;
  text: string;
}

export interface ICardList {
  id: string;
  title: string;
  cards: ICard[];
}
