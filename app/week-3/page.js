"use client"
import ItemList from './item-list';

export default function Page() {
    return (
            <main>
            <h1 className="text-3xl font-bold m-5 text-center">Shopping List</h1>
            <ItemList/>

            <button 
            className="px-4 py-2 m-auto text-white bg-blue-500 rounded hover:bg-blue-600 mt-10 flex flex-col items-center mb-10"
            onClick={() => window.location.href = './'}>
        Back to Home
      </button>
    </main>
    );
}