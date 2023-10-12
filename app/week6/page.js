"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./item-form";
import itemData from "./items.json";


export default function Page() {
    const [items, setItems] = useState(itemData);

    const handleAddItems = (item) => {
        setItems([...items, item]);
    };

    return (
        <main>
            <NewItem onAddItem={(item) => handleAddItems(item)}/>
            <ItemList items={items}/>
        </main>
    );
}