"use client"
import ItemList from './item-list';

export default function Page() {
    return (
            <main>
            <h1 className="text-3xl font-bold mt-5 text-center">Shopping List</h1>
            <ItemList/>

            <button 
        className="absolute top-5 left-5 px-4 py-2 text-white rounded hover:bg-blue-600"
            onClick={() => window.location.href = './'}>
        Back to Home
      </button>
    </main>
    );
}