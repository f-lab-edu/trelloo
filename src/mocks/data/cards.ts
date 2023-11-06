import { GetCardListsResponse } from "@/queries/cardList/interface";

export const cardLists: GetCardListsResponse[] = [
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
