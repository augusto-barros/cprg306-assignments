"use client"
import { useState } from 'react';

export default function NewItem({onAddItem}) {
    
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('Produce');

    const increment = () => {setQuantity(quantity + 1);}
    let incrementDisable = quantity >= 20;  
    const decrement = () => {setQuantity(quantity - 1);}
    let decrementDisable = quantity <= 1;

    let btnStyle = "px-4 py-2 m-2 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:bg-gray-400";


    const handleSubmit = (event) => {
        event.preventDefault();
    
        const generateId = () => {
            return Math.random().toString(36).substring(2, 9);
        };

        const newItem = {
            id: generateId(),
            name: name,
            quantity: quantity,
            category: category,
        };

        onAddItem(newItem);

        setName('');
        setQuantity(1);
        setCategory('Produce');

    }

    return (
        <div className="mt-5 flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit} className='w-64 bg-yellow-500 p-4 rounded flex flex-col'>
    
                <div className='flex flex-wrap mb-3 mt-4'>
                    <input 
                        placeholder='Item Name'
                        className='w-full px-2 py-1 rounded border-b-black bg-white text-black'
                        type='text'
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                        required
                    />
                </div>
    
                <div className='flex-1'>
                    <select
                        className='w-full px-2 py-1 rounded border-b-black bg-white text-black'
                        onChange={(event) => setCategory(event.target.value)}
                        value={category}>
                        <option value='produce'>Produce</option>
                        <option value='meat'>Meat</option>
                        <option value='dairy'>Dairy</option>
                        <option value='bakery'>Bakery</option>
                        <option value='frozen foods'>Frozen</option>
                        <option value='canned goods'>Canned Goods</option>
                        <option value='dry goods'>Dry Goods</option>
                        <option value='beverages'>Beverages</option>
                        <option value='snacks'>Snacks</option>
                        <option value='household'>Household</option>
                        <option value='other'>Other</option>
                    </select>
                </div>
    
                <div className='flex justify-center'>
                    <h1 className="text-2x1 text-black bg-white px-4 py-1 mt-3 rounded border border-black shadow-md">{quantity}</h1>
                </div>
    
                <div className='flex justify-center'>
                    <button type='button' className={btnStyle} onClick={decrement} disabled={decrementDisable}>-</button>
                    <button type='button' className={btnStyle} onClick={increment} disabled={incrementDisable}>+</button>
                </div>

                <button type="submit" className={btnStyle}>Add new item</button>
    
            </form>
        </div>
    );
}