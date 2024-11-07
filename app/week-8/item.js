"use client"
const Item = ({ name, quantity, category, onSelect }) => {
    return (
        <li 
            onClick={onSelect}
            className="cursor pointer bg-indigo-700 p-4 w-64 mx-auto rounded-lg flex flex-col items-center hover:bg-indigo-800">
            <p className="font-bold">{name}</p>
            <p>Buy {quantity} in {category}</p>
        </li>
    );
}

export default Item;