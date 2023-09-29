"use client"

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Create new shiopping list item
        const item = {
            name: name,
            quantity: quantity,
            category: category,
        };
        console.log(item);
        alert(`${item.quantity} ${item.name} added to ${item.category} list!`);
        // Set the form back to default values
        setName("");
        setQuantity(1);
        setCategory("Produce");
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    return (
        <main className="flex items-center">
            <div className="bg-blue-gray-100 flex flex-col max-w-lg border-4 border-indigo-500 rounded-xl bg-indigo-300">
                <h1 className="text-2xl text-center">Add New Item</h1>
                <div className="">
                    <form onSubmit={handleSubmit} className="flex flex-col p-4">
                        <label htmlFor="name">Name:</label>
                        <input required id="name" type="text" value={name} onChange={handleNameChange} className="border-2 border-indigo-400 rounded-3xl" />
                        <label htmlFor="quantity">Quantity:</label>
                        <input id="quantity" type="number" value={quantity} onChange={handleQuantityChange} className="border-2 border-indigo-400 rounded-3xl" />
                        <label htmlFor="category">Category:</label>
                        <select id="category" value={category} onChange={handleCategoryChange} className="border-2 border-indigo-400 rounded-3xl" >
                            <option value="Produce">Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Meat">Meat</option>
                            <option value="Canned Goods">Canned Goods</option>
                            <option value="Dry Goods">Dry Goods</option>
                            <option value="Household">Household</option>
                        </select>
                        <input type="submit" value="Add" className="border-2 border-indigo-400 rounded-xl bg-white my-2"/>
                    </form>
                </div>
            </div>
        </main>
    )

}