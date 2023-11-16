import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

const getItems = async userId => {
    const q = query(collection(db, "shopping-list-items"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    const items = [];
    querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
    });
    return items;
}

const addItem = async (userId, item) => {
    const docRef = await addDoc(collection(db, "shopping-list-items"), {
        userId,
        item,
    });
    return docRef.id;
}

export { getItems, addItem };