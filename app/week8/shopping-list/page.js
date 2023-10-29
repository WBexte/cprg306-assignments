"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";


export default function Page() {
    const [items, setItems] = useState(itemData);
    const [selectedItem, setSelectedItem] = useState(null);
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleAddItems = (item) => {
        setItems([...items, item]);
    };

    const handleItemSelect = (item) => {
        const cleanString = item.replace(/[\uD800-\uDFFF].*$/, '');
        console.log("Clean string", cleanString);
        const parts = cleanString.split(',');
        const strippedString = parts[0].trim();
        const ingredient = strippedString.replace(" ", "_");
        console.log("Check out this item!", ingredient);
        setSelectedItem(ingredient);
    };

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
        </main>
    );
}