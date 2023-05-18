import { ICard, ICardList } from "@/interfaces/cards";

export const rearrangeCards = (currentCardList: ICardList[], cardId: string, listId: string, index: number) => {
  const currentCardsList = currentCardList.find((cardList) => cardList.cards.some((card) => card.id === cardId));
  const currentListId = currentCardsList?.id;
  const card = currentCardsList?.cards.find((card) => card.id === cardId);
  if (!card) return;

  const updatedCardLists = currentCardList.map((cardList) => {
    const isDroppedList = cardList.id === listId;
    const isDraggedList = cardList.id === currentListId;
    const isMovedToSameList = isDroppedList && isDraggedList;

    if (isMovedToSameList) {
      return reorderCardInList(cardList, card, cardId, index);
    }

    if (isDroppedList) {
      return addCardToList(cardList, card, index);
    }

    if (isDraggedList) {
      return removeCardFromList(cardList, cardId);
    }

    return cardList;
  });

  return updatedCardLists;
};

const reorderCardInList = (cardList: ICardList, card: ICard, cardId: string, index: number) => {
  const filteredCardList = removeCardFromList(cardList, cardId);
  return addCardToList(filteredCardList, card, index);
};

const addCardToList = (cardList: ICardList, card: ICard, index: number) => {
  const newCards = Array.from(cardList.cards);
  newCards.splice(index, 0, card);
  return { ...cardList, cards: newCards };
};

const removeCardFromList = (cardList: ICardList, cardId: string) => {
  const filteredCards = cardList.cards.filter((card) => card.id !== cardId);
  return { ...cardList, cards: filteredCards };
};
