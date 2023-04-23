import { type EditCardPositionParam, type EditCardPositionRequest } from './../queries/cards/interface'
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

export const addCard = async (card: Omit<CardData, 'index'>) => {
  const db = await initDb()
  const tx = db.transaction(cardStoreName, 'readwrite')
  const store = tx.objectStore(cardStoreName)
  const index = await store.count()
  await store.add({ ...card, index })
  await tx.done
  return card
}

export const editCard = async ({ id, description }: EditCardData) => {
  const db = await initDb()
  const tx = db.transaction(cardStoreName, 'readwrite')
  const store = tx.objectStore(cardStoreName)
  const card = await store.get(id)
  card.description = description
  await store.put(card)
  await tx.done
  return card
}
export const editCardPosition = async ({
  cardId,
  source,
  destination
}: EditCardPositionParam & EditCardPositionRequest) => {
  const db = await initDb()

  const tx1 = db.transaction([cardStoreName], 'readonly')
  const sourceListStore = tx1.objectStore(cardStoreName)
  const sourceList = await sourceListStore.index('listId').getAll(source.listId)
  const updatedSourceList = sourceList.filter((card) => card.id !== cardId)

  const tx2 = db.transaction([cardStoreName], 'readwrite')
  const destinationListStore = tx2.objectStore(cardStoreName)
  const destinationList = await destinationListStore.index('listId').getAll(destination.listId)
  const updatedDestinationList = destinationList.filter((card) => card.id !== cardId)

  const sourceListStore2 = tx2.objectStore(cardStoreName)
  const card = await sourceListStore2.get(cardId)
  const insertedCard = { ...card, listId: destination.listId, index: destination.index }
  updatedDestinationList.splice(destination.index, 0, insertedCard)

  for (let i = 0; i < updatedSourceList.length; i++) {
    const updatedCard = updatedSourceList[i]
    updatedCard.index = i
    await destinationListStore.put(updatedCard)
  }

  for (let i = 0; i < updatedDestinationList.length; i++) {
    const updatedCard = updatedDestinationList[i]
    updatedCard.index = i
    await destinationListStore.put(updatedCard)
  }

  await tx1.done
  await tx2.done
}

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

export const getAllCardListsWithCards = async (): Promise<CardListData[]> => {
  const lists = await getAllCardLists()
  const cards = await getAllCards()
  return lists.map((list) => {
    return {
      ...list,
      cards: cards.filter((card) => card.listId === list.id).sort((a, b) => a.index - b.index)
    }
  })
}
