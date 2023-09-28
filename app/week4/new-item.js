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
        <main>
            <h1 className="text-2xl">Add New Item</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input required id="name" type="text" value={name} onChange={handleNameChange} />
                <label htmlFor="quantity">Quantity:</label>
                <input id="quantity" type="number" value={quantity} onChange={handleQuantityChange} />
                <label htmlFor="category">Category:</label>
                <select id="category" value={category} onChange={handleCategoryChange}>
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Household">Household</option>
                </select>
                <input type="submit" value="Add" />
            </form>
        </main>
    )

}