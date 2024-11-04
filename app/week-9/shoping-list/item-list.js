import Item from "./item.js";
import { useState } from 'react';

function ItemList({ items, onItemSelect }) {
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

  const groupedItems = items.reduce((groups, item) => {
    const category = item.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {});


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
        <button
        onClick={() => setSortBy('grouped')}
        className={`px-4 py-2 border ${sortBy === 'grouped' ? 'bg-blue-500 text-white' : 'bg-black text-gray-200'}`}
        aria-pressed={sortBy === 'grouped'}
        >
          Grouped Category
        </button>
      </div>
      {sortBy === 'grouped' ? (
        <ul className="flex flex-col items-center ">
          {Object.keys(groupedItems).map((category) => (
            <li key={category} className="mb-4">
              <h3 className="text-lg font-semibold">{category}</h3>
              <ul>
                {groupedItems[category].map((item) => (
                  <li key={item.id}
                  className="m-4">
                    <Item 
                      name={item.name} 
                      quantity={item.quantity} 
                      category={item.category} 
                      onSelect={item.onSelect}
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="space-y-2">
          {sortedItems.map((item) => (
            <Item key={item.id} {...item} onSelect={() => onItemSelect(item)} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItemList;