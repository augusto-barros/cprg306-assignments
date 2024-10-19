
const Item = ({ name, quantity, category }) => {
    return (
        <li className="bg-indigo-700 p-4 w-64 mx-auto rounded-lg flex flex-col items-center">
            <p className="font-bold">{name}</p>
            <p>Buy {quantity} in {category}</p>
        </li>
    );
}

export default Item;