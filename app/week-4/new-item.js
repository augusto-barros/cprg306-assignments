"use client"
import { useState } from 'react';

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
    }

    let incrementDisable = quantity >= 20;  

    const decrement = () => {
        setQuantity(quantity - 1);
    }

    let decrementDisable = quantity <= 1;


    let btnStyle = "px-4 py-2 m-5 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:bg-gray-400";

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="bg-white p-10 rounded shadow-lg text-center">
                <h1 className="text-black text-2xl">{quantity}</h1>
                <button
                className={btnStyle} 
                onClick={increment}
                disabled={incrementDisable}
                >+</button>
                <button
                className={btnStyle} 
                onClick={decrement}
                disabled={decrementDisable}
                >-</button>

                
            </div>
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