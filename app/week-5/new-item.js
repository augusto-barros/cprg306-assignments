"use client"
import { useState } from 'react';


export default function NewItem() {
    
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
    
        const Item = {
            name: name,
            quantity: quantity,
            category: category,
        }
        
        console.log(Item);

        alert(`Added Item: Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
        setName('');
        setQuantity(1);
        setCategory('Produce');
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className='bg-amber-400 flex flex-col justify-center items-center p-4 rounded'>
    
                <div className='mb-3 mt-4'>
                    <input 
                        placeholder='Item Name'
                        className='px-2 py-0.5 rounded border-b-black bg-white text-black'
                        type='text'
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                        required
                    />
                </div>
    
                <div className='mb-3'>
                    <select
                        className='px-2 py-0.5 rounded border-b-black bg-white text-black'
                        onChange={(event) => setCategory(event.target.value)}
                        value={category}>
                        <option value='Produce'>Produce</option>
                        <option value='Meat'>Meat</option>
                        <option value='Dairy'>Dairy</option>
                        <option value='Bakery'>Bakery</option>
                        <option value='Frozen Foods'>Frozen</option>
                        <option value='Canned Goods'>Canned Goods</option>
                        <option value='Dry Goods'>Dry Goods</option>
                        <option value='Beverages'>Beverages</option>
                        <option value='Snacks'>Snacks</option>
                        <option value='Household'>Household</option>
                        <option value='Other'>Other</option>
                    </select>
                </div>
    
                <div className='mb-1'>
                    <h1 className="text-black text-3xl bg-white px-4 rounded">{quantity}</h1>
                </div>
    
                <div className='mb-3'>
                    <button className={btnStyle} onClick={decrement} disabled={decrementDisable}>-</button>
                    <button className={btnStyle} onClick={increment} disabled={incrementDisable}>+</button>

                </div>

                <button className={btnStyle}>Add new item</button>
    
            </form>

        <div className="mt-5">
        <button 
        className="absolute top-5 left-5 px-4 py-2 text-white rounded hover:bg-blue-600"
        onClick={() => window.location.href = './'}>
        Back to Home
        </button>
        </div>

        </div>
    );
}