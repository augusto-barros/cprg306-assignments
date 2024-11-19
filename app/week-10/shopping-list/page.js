"use client"

import { useState, useEffect } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { addItem, getItems } from '../_services/shopping-list-service';
import { useUserAuth } from '../_utils/auth-context';

export default function Page() {

    const [items, setItems] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [selectedItemName, setSelectedItemName] = useState('');
    const { user } = useUserAuth();

    const loadItems = async () => {
        try {
            const ShoppingListItems = await getItems(user.uid);
            setItems(ShoppingListItems);
        } catch (error) {
            console.error("Error loading items: ", error);
        }
    };

    useEffect(() => {
        if (user) {
        loadItems();
        }
    }, [user]);


    const handleAddItem = async (item) => {
        try {
            const itemId = await addItem(user.uid, item);
            item.id = itemId;
            setItems([...items, item]);
            setSelectedItemName('');
        } catch (error) {
            console.error("Error adding item: ", error);
        }

    };

    const toggleForm = () => setShowForm((prev) => !prev);

    const handleItemSelect = (item) => {
        const cleanedName = item.name.split(',')[0].trim();
        setSelectedItemName(cleanedName);
    };

if (!user) {
    return <p className="text-center">Please log in to see your shopping list.</p>;
}

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

            {showForm && <NewItem 
            onAddItem={handleAddItem} />}
            
            <ItemList 
            items={items} 
            onItemSelect={handleItemSelect}
            />

            <div className='absolute top-10 right-20'>
                <MealIdeas ingredient={selectedItemName} />
            </div>

            <button 
                className="absolute top-5 left-5 px-4 py-2 text-white rounded hover:bg-blue-600"
                onClick={() => window.location.href = './'}>
                    Back to Home
            </button>
        </main>
    );
}
