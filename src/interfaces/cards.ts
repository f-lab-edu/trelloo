export interface Card {
  id: string;
  text: string;
}

export interface CardList {
  id: string;
  title: string;
  cards: Card[];
}
