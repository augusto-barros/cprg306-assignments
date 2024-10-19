import Item from "./item.js";
import { useState } from 'react';
import items from './items.json';

function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((name, category) => {
    if (sortBy === 'name') {
      return name.name.localeCompare(category.name);
    } else if (sortBy === 'category') {
      return name.category.localeCompare(category.category);
    }
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="m-5">Sort by:</h3>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 border ${sortBy === 'name' ? 'bg-blue-500' : 'bg-black'} `}
        >Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 border ${sortBy === 'category' ? 'bg-blue-500' : 'bg-black'} `}
        >Category
        </button>
      </div>
      <ul className="flex flex-col items-center">
        {sortedItems.map((item) => (
          <li key={item.id} className="mb-4">
            <Item name={item.name} quantity={item.quantity} category={item.category} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
