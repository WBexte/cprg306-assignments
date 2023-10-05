"use client";

import { useState } from "react";
import Item from "./item";
import itemData from "./items.json";


export default function ItemList() {

    const [sortBy, setSortBy] = useState("name");

    if(sortBy === "name") {
        itemData.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });           
    } else if (sortBy === "category") {
        itemData.sort((a, b) => {
            return a.category.localeCompare(b.category);
        });
    } else {
        return;
    }

    const handleClick = () => {

    }


    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row items-center">
                <button onClick={() => setSortBy("name")} className={`border-2 border-indigo-400 rounded-md bg-white m-2 p-2 ${ sortBy === 'name' ? 'bg-indigo-500' : 'bg-white' }`}>Sort by Name</button>
                <button onClick={() => setSortBy("category")} className={`border-2 border-indigo-400 rounded-md bg-white m-2 p-2 ${ sortBy === 'category' ? 'bg-indigo-500' : 'bg-white' }`}>Sort by Category</button>
            </div>
            <ul className="flex flex-col items-center">
                {itemData.map((itemData) => (
                    <Item item={itemData.name} quantity={itemData.quantity} category={itemData.category}/>
                ))}
            </ul>
        </div>
    );

}