"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./item-form";
import itemData from "./items.json";
import Item from "./item";


export default function Page() {
    const [items, setItems] = useState(itemData);

    const handleAddItems = (event) => {
        event.preventDefault();
        setItems([...items, { item, quantity, category }]);
    };

    return (
        <main>
            <NewItem onAddItem={handleAddItems}/>
            <ItemList items={items}/>
        </main>
    );
}