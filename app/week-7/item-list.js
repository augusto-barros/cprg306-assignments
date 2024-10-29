import Item from "./item.js";
import { useState } from 'react';

function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('name');

  const sortItems = (items, criteria) => {
    return [...items].sort((a, b) => {
      if (criteria === 'name') {
        return a.name.localeCompare(b.name);
      } else if (criteria === 'category') {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
  };

  const sortedItems = sortItems(items, sortBy);

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="m-5 text-lg font-semibold">Sort by:</h3>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 border ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-black text-gray-200'}`}
          aria-pressed={sortBy === 'name'}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 border ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-black text-gray-200'}`}
          aria-pressed={sortBy === 'category'}
        >
          Category
        </button>
      </div>
      <ul className="flex flex-col items-center">
        {sortedItems.map((item) => (
          <li key={item.id} className="mb-4">
            <Item 
              name={item.name} 
              quantity={item.quantity} 
              category={item.category} 
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
