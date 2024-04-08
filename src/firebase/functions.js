import {
  addDoc,
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


export const saveExhibition = async (data) => {
  await setDoc(doc(firestore, "exhibition", `${Date.now()}`), data, {
    merge: true,
  });
};
export const getAllFrames = async () => {
  const items = await getDocs(
    query(collection(firestore, "frames"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};

export const savePurchase = async (email, purchaseData) => {
  // Create a reference to the "purchases" collection
  const purchasesCollectionRef = collection(firestore, "purchases");

  // Add a new document to the "purchases" collection
  await addDoc(purchasesCollectionRef, {
    userEmail: email,
    purchaseData: purchaseData,
    timestamp: new Date(), // Store timestamp of the purchase
  });
};

// Get all purchases for a user
export const getAllPurchases = async (email) => {
  // Create a reference to the "purchases" collection
  const purchasesCollectionRef = collection(firestore, "purchases");

  // Create a query to retrieve purchases for a specific user
  const querySnapshot = await getDocs(
    query(
      purchasesCollectionRef,
      where("userEmail", "==", email) // Filter purchases by user's email
      // orderBy("timestamp", "desc") // Order purchases by timestamp in descending order
    )
  );

  // Map documents to purchase data and return
  return querySnapshot.docs.map((doc) => doc.data());
};
