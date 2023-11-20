"use client";
import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";


export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleAddItems = (item) => {
        addItem(user.uid, item);
        loadItems();
    };

    const handleItemSelect = (item) => {
        const cleanString = item.replace(/[\uD800-\uDFFF].*$/, '');
        const parts = cleanString.split(',');
        const strippedString = parts[0].trim();
        const ingredient = strippedString.replace(" ", "_");
        setSelectedItem(ingredient);
    };

    const loadItems = async () => {
        if(!user) return;
        const items = await getItems(user.uid);
        setItems(items);
    };

    useEffect(() => {
        loadItems();
    }, [user]);

    if (!user) {
        return (
            <main>
                <h1>Week 8</h1>
                <p>
                    You'll need to sign into the app to see the content.
                </p>
                <p>
                    <button onClick={gitHubSignIn}>Sign in with GitHub</button>
                </p>
            </main>
        );
    }
    return (
        <main>
            <NewItem onAddItem={(item) => handleAddItems(item)}/>
            <ItemList items={items} onItemSelect={handleItemSelect}/>
            <MealIdeas ingredient={selectedItem}/>
            <p>{ user.uid }</p>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </main>
    );
}