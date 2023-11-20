import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

const getItems = async userId => {
    const q = query(collection(db, "users", userId, "items"));
    const querySnapshot = await getDocs(q);
    const items = [];
    querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
    });
    return items;
}

const addItem = async (userId, item) => {
    const docRef = await addDoc(collection(db, "users", userId, "items"), {
        userId,
        item,
    });
    return docRef.id;
}

export { getItems, addItem };