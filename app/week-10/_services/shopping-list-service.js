import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
    try {
      const itemsCollection = collection(db, "users", userId, "items");
      const itemsSnapshot = await getDocs(itemsCollection);
  
      const queryItems = itemsSnapshot.docs.map((itemsDoc) => ({
        id: itemsDoc.id,
        ...itemsDoc.data(),
      }));
  
      return queryItems;
    } catch (fetchItemsError) {
      console.error("Error in fetchAllItems: ", fetchItemsError);
    }
};

export const addItem = async (userId, item) => {
    try {
        const itemsCollection = collection(db, "users", userId, "items");
        const itemRef = await addDoc(itemsCollection, item);
        return itemRef;
    } catch (addItemError) {
        console.error("Error adding document: ", addItemError);
    }
};
