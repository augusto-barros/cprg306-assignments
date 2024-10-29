"use client"
import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [showForm, setShowForm] = useState(false);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const toggleForm = () => setShowForm((prev) => !prev);

    return (
        <main>
            <h1 className="text-3xl font-bold mt-5 text-center">Shopping List</h1>
            
            <div className="flex justify-center items-center mt-5">
                <button 
                    className="px-4 py-2 text-white bg-green-600 hover:bg-green-700 rounded"
                    onClick={toggleForm}>
                        {showForm ? "Close Form" : "Add New Item"}
                </button>
            </div>

            {showForm && <NewItem onAddItem={handleAddItem} />}
            <ItemList items={items} />

            <button 
                className="absolute top-5 left-5 px-4 py-2 text-white rounded hover:bg-blue-600"
                onClick={() => window.location.href = './'}>
                    Back to Home
            </button>
        </main>
    );
}
