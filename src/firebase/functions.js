import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { firestore } from "./config";

// Saving new Item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "frames", `${Date.now()}`), data, {
    merge: true,
  });
};

export const getAllFrames = async () => {
  const items = await getDocs(
    query(collection(firestore, "frames"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};
