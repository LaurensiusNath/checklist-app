import { useState } from "react";
import Item from "./Item";

function CheckList({ items, setItems, onClearAll }) {
  const [sortBy, setSortBy] = useState("input");

  function sortItems(items) {
    switch (sortBy) {
      case "title":
        return items.slice().sort((a, b) => a.title.localeCompare(b.title));
      case "status":
        return items
          .slice()
          .sort((a, b) => Number(a.isDone) - Number(b.isDone));
      case "input":
      default:
        return items;
    }
  }

  const sortedItems = sortItems(items);

  console.log(sortBy);
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} key={item.id} setItems={setItems} />
        ))}
      </ul>

      <div className="action">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan input</option>
          <option value="title">Urutkan berdasarkan judul</option>
          <option value="status">Urutkan berdasarkan status</option>
        </select>

        <button onClick={() => onClearAll()}>Clear All</button>
      </div>
    </div>
  );
}

export default CheckList;
