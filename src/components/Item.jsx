import { useState } from "react";

function Item({ item, setItems }) {
  const [isChecked, setIsChecked] = useState(item.isDone);

  function handleCheck(e) {
    const isChecked = e.target.checked;
    setIsChecked(isChecked);
    setItems((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem.id === item.id ? { ...prevItem, isDone: isChecked } : prevItem
      )
    );

    console.log(item);
  }

  function handleDelete(e) {
    e.preventDefault();
    setItems((prevItems) =>
      prevItems.filter((prevItem) => prevItem.id !== item.id)
    );
  }

  return (
    <li key={item.id}>
      <input type="checkbox" checked={isChecked} onChange={handleCheck} />
      <span style={{ textDecoration: item.isDone ? "line-through" : "" }}>
        {item.title}
      </span>
      <button onClick={handleDelete}>&times;</button>
    </li>
  );
}

export default Item;
