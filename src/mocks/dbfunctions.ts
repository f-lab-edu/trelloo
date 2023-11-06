import { openDB } from "idb";

export interface CardListData {
  id: string;
  title: string;
  createdAt: number;
}

export interface CardData {
  listId: string;
  id: string;
  text: string;
  createdAt: number;
}

export interface EditCardData {
  id: string;
  text: string;
}

export interface DeleteCardData {
  id: string;
}

const dbName = "card-db";
const listStoreName = "card-list-store";
const cardStoreName = "card-store";
const listKeyPath = "id";
const cardKeyPath = "id";

const initDb = async () => {
  const db = await openDB(dbName, 1, {
    upgrade(db) {
      const cardListStore = db.createObjectStore(listStoreName, {
        keyPath: listKeyPath,
      });
      const cardStore = db.createObjectStore(cardStoreName, {
        keyPath: cardKeyPath,
      });
      cardListStore.createIndex("id", "id", { unique: true });
      cardStore.createIndex("listId", "listId", { unique: false });
      cardStore.createIndex("id", "id", { unique: true });
      cardStore.createIndex("createdAt", "createdAt", { unique: true });
    },
  });
  return db;
};

export const addCardList = async (cardList: CardListData) => {
  const db = await initDb();
  const tx = db.transaction(listStoreName, "readwrite");
  const store = tx.objectStore(listStoreName);
  await store.put(cardList);
  await tx.done;
  return name;
};

export const editCardList = async ({ id, text }: EditCardData) => {
  const db = await initDb();
  const tx = db.transaction(cardStoreName, "readwrite");
  const store = tx.objectStore(cardStoreName);
  const list = await store.get(id);
  list.text = text;
  await store.put(list);
  await tx.done;
  return list;
};

export const deleteCardList = async ({ id }: DeleteCardData) => {
  await deleteCardsInList({ id });
  await deleteOnlyList({ id });
};

const deleteOnlyList = async ({ id }: DeleteCardData) => {
  const db = await initDb();
  const tx = db.transaction([listStoreName, cardStoreName], "readwrite");
  const cardListStore = tx.objectStore(listStoreName);
  const cardListKeyRange = IDBKeyRange.only(id);
  const cardListRequest = cardListStore.index("id").openCursor(cardListKeyRange);
  const cardListCursor = await cardListRequest;
  const deleteRequest = cardListCursor?.delete();
  await tx.done;

  return deleteRequest;
};

const deleteCardsInList = async ({ id }: DeleteCardData) => {
  const db = await initDb();
  const tx = db.transaction([listStoreName, cardStoreName], "readwrite");
  const cards = await getCardIdsByListId(id);
  if (cards !== undefined) {
    for (const card of cards) {
      await deleteCard({ id: card.id });
    }
  }
  await tx.done;
};

export const getCardIdsByListId = async (listId: string): Promise<CardData[]> => {
  const db = await initDb();
  const tx = db.transaction(cardStoreName, "readonly");
  const store = tx.objectStore(cardStoreName);
  const index = store.index("listId");
  const cards = await index.getAll(listId);
  await tx.done;
  return cards;
};

export const addCard = async (card: CardData) => {
  const db = await initDb();
  const tx = db.transaction(cardStoreName, "readwrite");
  const store = tx.objectStore(cardStoreName);
  await store.put(card);
  await tx.done;
  return card;
};

export const editCard = async ({ id, text }: EditCardData) => {
  const db = await initDb();
  const tx = db.transaction(cardStoreName, "readwrite");
  const store = tx.objectStore(cardStoreName);
  const card = await store.get(id);
  card.text = text;
  await store.put(card);
  await tx.done;
  return card;
};

export const deleteCard = async ({ id }: DeleteCardData) => {
  const db = await initDb();
  const tx = db.transaction(cardStoreName, "readwrite");
  const store = tx.objectStore(cardStoreName);
  const index = store.index("id");
  const keyRange = IDBKeyRange.only(id);
  const cursor = await index.openCursor(keyRange);
  const deleteRequest = cursor?.delete();
  await tx.done;
  return deleteRequest;
};

export const getAllCardLists = async (): Promise<CardListData[]> => {
  const db = await initDb();
  const tx = db.transaction(listStoreName, "readonly");
  const store = tx.objectStore(listStoreName);
  const lists = await store.getAll();
  const sortedLists = lists.sort((a, b) => a.createdAt - b.createdAt);
  await tx.done;
  return sortedLists;
};

export const getAllCards = async (): Promise<CardData[]> => {
  const db = await initDb();
  const tx = db.transaction(cardStoreName, "readonly");
  const store = tx.objectStore(cardStoreName);
  const cards = await store.getAll();
  const sortedCards = cards.sort((a, b) => a.createdAt - b.createdAt);
  await tx.done;
  return sortedCards;
};

export const getAllCardListsWithCards = async (): Promise<CardListData[]> => {
  const lists = await getAllCardLists();
  const cards = await getAllCards();
  return lists.map((list) => {
    return {
      ...list,
      cards: cards.filter((card) => card.listId === list.id),
    };
  });
};
