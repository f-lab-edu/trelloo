export interface CardList {
  title: string;
  cards: { text: string }[];
}

export const cardLists: CardList[] = [
  {
    title: "list1",
    cards: [
      {
        text: "card1",
      },
      {
        text: "card2",
      },
    ],
  },
  {
    title: "list2",
    cards: [
      {
        text: "card2-1",
      },
    ],
  },
];
