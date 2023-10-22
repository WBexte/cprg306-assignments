"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./items.json";
import MealIdeas from "./meal-ideas";


export default function Page() {
    const [items, setItems] = useState(itemData);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleAddItems = (item) => {
        setItems([...items, item]);
    };

    const handleItemSelect = (item) => {
        const parts = item.split(',');
        const ingredient = parts[0].replace(" ", "_");
        console.log("Check out this item!", ingredient);
        setSelectedItem(ingredient);
    };

    return (
        <main>
            <NewItem onAddItem={(item) => handleAddItems(item)}/>
            <ItemList items={items} onItemSelect={handleItemSelect}/>
            <MealIdeas ingredient={selectedItem}/>
        </main>
    );
}