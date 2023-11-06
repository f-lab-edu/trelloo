import { openDB } from "idb";
import { cardLists } from "./data/cards";

interface SaveParams<TKey = any, TValue = any> {
  key: TKey;
  value: TValue;
}
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const dbName = "board";
const storeName = "board";
const keyPath = "id";

const initDb = () => {
  const openRequest = indexedDB.open(dbName, 1);
  openRequest.onupgradeneeded = (event: any) => {
    const db = event.target.result;
    const objectStore = db.createObjectStore(storeName, { keyPath });
    objectStore.createIndex("title", "title", { unique: false });
  };

  openRequest.onerror = (event: any) => {
    console.error("Failed to open database", event);
  };

  openRequest.onsuccess = (event: any) => {
    const db = event.target.result;
    const tx = db.transaction(storeName, "readwrite");
    const objectStore = tx.objectStore(storeName);
    cardLists.forEach((cardList) => {
      objectStore.add(cardList);
    });
    tx.oncomplete = () => {
      console.log("cardLists added to database");
    };
    tx.onerror = (event: any) => {
      console.error("Failed to add todos", event);
    };
  };
};

initDb();

export const saveDataByKey = async ({ key, value }: any) => {
  const db = await openDB(dbName, 1);
  const tx = db.transaction(storeName, "readwrite");
  const store = tx.objectStore(storeName);
  // Error! need to fix:
  // put the whole data not to an card arry, but to the entire data
  // await store.put({ id: "list1", title: "list1",cards });
  await tx.done;
};

const saveData = async (data: any) => {
  const db = await openDB(dbName, 1);
  const tx = db.transaction(storeName, "readwrite");
  await tx.store.add(data);
  await tx.done;
};

async function getDataByKey(key: string) {
  const db = await openDB(dbName, 1);
  const tx = db.transaction(storeName, "readonly");
  const data = await tx.store.get(key);
  return data;
}

export const getAllData = async () => {
  const db = await openDB(dbName, 1);
  const tx = db.transaction(storeName, "readonly");
  const data = await tx.store.getAll();
  return data;
};
