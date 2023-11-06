import { type EditCardPositionRequest } from './../queries/cards/interface'
import { openDB } from 'idb'

export interface CardListData {
  id: string
  title: string
  createdAt: number
}

export interface EditCardListData {
  id: string
  title: string
}

export interface CardData {
  listId: string
  id: string
  description: string
  createdAt: number
  index: number
}

export interface EditCardData {
  id: string
  description: string
}

export interface DeleteCardData {
  id: string
}

const dbName = 'card-db'
const listStoreName = 'card-list-store'
const cardStoreName = 'card-store'
const listKeyPath = 'id'
const cardKeyPath = 'id'

const initDb = async () => {
  const db = await openDB(dbName, 1, {
    upgrade (db) {
      const cardListStore = db.createObjectStore(listStoreName, {
        keyPath: listKeyPath
      })
      const cardStore = db.createObjectStore(cardStoreName, {
        autoIncrement: true,
        keyPath: cardKeyPath
      })

      cardListStore.createIndex('id', 'id', { unique: true })
      cardStore.createIndex('listId', 'listId', { unique: false })
      cardStore.createIndex('id', 'id', { unique: true })
      cardStore.createIndex('createdAt', 'createdAt', { unique: true })
      cardStore.createIndex('index', 'index', { unique: false })
    }
  })
  return db
}

export const addCardList = async (cardList: CardListData) => {
  const db = await initDb()
  const tx = db.transaction(listStoreName, 'readwrite')
  const store = tx.objectStore(listStoreName)
  await store.put(cardList)
  await tx.done
  return name
}

export const editCardList = async ({ id, title }: EditCardListData) => {
  const db = await initDb()
  const tx = db.transaction(listStoreName, 'readwrite')
  const store = tx.objectStore(listStoreName)
  const list = await store.get(id)
  list.title = title
  await store.put(list)
  await tx.done
  return list
}

export const deleteCardList = async ({ id }: DeleteCardData) => {
  await deleteCardsInList({ id })
  await deleteOnlyList({ id })
}

const deleteOnlyList = async ({ id }: DeleteCardData) => {
  const db = await initDb()
  const tx = db.transaction([listStoreName, cardStoreName], 'readwrite')
  const cardListStore = tx.objectStore(listStoreName)
  const cardListKeyRange = IDBKeyRange.only(id)
  const cardListRequest = cardListStore.index('id').openCursor(cardListKeyRange)
  const cardListCursor = await cardListRequest
  const deleteRequest = cardListCursor?.delete()
  await tx.done

  return await deleteRequest
}

const deleteCardsInList = async ({ id }: DeleteCardData) => {
  const db = await initDb()
  const tx = db.transaction([listStoreName, cardStoreName], 'readwrite')
  const cards = await getCardIdsByListId(id)
  if (cards !== undefined) {
    for (const card of cards) {
      await deleteCard({ id: card.id })
    }
  }
  await tx.done
}

export const getCardIdsByListId = async (listId: string): Promise<CardData[]> => {
  const db = await initDb()
  const tx = db.transaction(cardStoreName, 'readonly')
  const store = tx.objectStore(cardStoreName)
  const index = store.index('listId')
  const cards = await index.getAll(listId)
  await tx.done
  return cards
}

export const addCard = async (card: Omit<CardData, "index">) => {
  const db = await initDb();
  const tx = db.transaction([cardStoreName, listStoreName], "readwrite");

  const store = tx.objectStore(cardStoreName);
  const listStore = tx.objectStore(listStoreName);
  const list = await (await store.getAll()).filter((listCard) => listCard.listId === card.listId);
  console.log(list, "list");
  const index = list.length;
  await store.add({ ...card, index });
  await tx.done;
  return card;
};

export const editCard = async ({ id, description }: EditCardData) => {
  const db = await initDb();
  const tx = db.transaction(cardStoreName, "readwrite");
  const store = tx.objectStore(cardStoreName);
  const card = await store.get(id);
  card.description = description;
  await store.put(card);
  await tx.done;
  return card;
};

export const editCardPosition = async ({ cardId, listId, index }: EditCardPositionRequest) => {
  const db = await initDb();

  const tx = db.transaction([cardStoreName, listStoreName], "readwrite");
  const cardStore = tx.objectStore(cardStoreName);

  const movedCard = await cardStore.get(cardId);

  const oldCardList = await (await cardStore.getAll()).filter((card) => card.listId === movedCard.listId);

  oldCardList.forEach(async (card) => {
    if (card.index > movedCard.index) {
      card.index--;
      await cardStore.put(card);
    }
  });

  const newCardList = await (await cardStore.getAll()).filter((card) => card.listId === listId);
  newCardList.forEach(async (card) => {
    if (card.index >= index) {
      card.index++;
      await cardStore.put(card);
    }
  });

  movedCard.listId = listId;
  movedCard.index = index;

  await cardStore.put(movedCard);
};

export const deleteCard = async ({ id }: DeleteCardData) => {
  const db = await initDb()
  const tx = db.transaction(cardStoreName, 'readwrite')
  const store = tx.objectStore(cardStoreName)
  const index = store.index('id')
  const keyRange = IDBKeyRange.only(id)
  const cursor = await index.openCursor(keyRange)
  const deleteRequest = cursor?.delete()
  await tx.done
  return await deleteRequest
}

export const getAllCardLists = async (): Promise<CardListData[]> => {
  const db = await initDb()
  const tx = db.transaction(listStoreName, 'readonly')
  const store = tx.objectStore(listStoreName)
  const lists = await store.getAll()
  const sortedLists = lists.sort((a, b) => a.createdAt - b.createdAt)
  await tx.done
  return sortedLists
}

export const getAllCards = async (): Promise<CardData[]> => {
  const db = await initDb()
  const tx = db.transaction(cardStoreName, 'readonly')
  const store = tx.objectStore(cardStoreName)
  const cards = await store.getAll()
  const sortedCards = cards.sort((a, b) => a.createdAt - b.createdAt)
  await tx.done
  return sortedCards
}

export const getAllCardListsWithCards = async (keyword:string): Promise<CardListData[]> => {
  const lists = await getAllCardLists()
  const cards = await getAllCards()

  const searchedCards = cards.filter((card)=> card.description.includes(keyword))
  const searchingCards = keyword ? searchedCards : cards;

  return lists.map((list) => {
    return {
      ...list,
      cards: searchingCards.filter((card) => card.listId === list.id).sort((a, b) => a.index - b.index)
    }
  })
}
