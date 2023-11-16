"use client";

import { useState } from "react";
import Item from "./items";


export default function ItemList( {items, onItemSelect} ) {

    const [sortBy, setSortBy] = useState("name");

    if(sortBy === "name") {
        items.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });           
    } else if (sortBy === "category") {
        items.sort((a, b) => {
            return a.category.localeCompare(b.category);
        });
    } else {
        return;
    }


    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row items-center">
                <button onClick={() => setSortBy("name")} className={`border-2 border-indigo-400 rounded-md bg-white m-2 p-2 ${ sortBy === 'name' ? 'bg-indigo-500' : 'bg-white' }`}>Sort by Name</button>
                <button onClick={() => setSortBy("category")} className={`border-2 border-indigo-400 rounded-md bg-white m-2 p-2 ${ sortBy === 'category' ? 'bg-indigo-500' : 'bg-white' }`}>Sort by Category</button>
            </div>
            <ul className="flex flex-col items-center">
                {items.map((item) => (
                    <Item key={item.id} item={item.name} quantity={item.quantity} category={item.category} onSelect={onItemSelect}/>
                ))}
            </ul>
        </div>
    );

}