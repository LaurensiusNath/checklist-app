import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import Stats from "./components/Stats";
import CheckList from "./components/CheckList.jsx";

const listItem = [
  {
    id: 1,
    title: "Eat",
    isDone: false,
  },
  {
    id: 2,
    title: "Sleep",
    isDone: true,
  },
];

function App() {
  const [items, setItems] = useState(listItem);

  function handleClearAllItems() {
    const confirm = window.confirm("Apakah mau menghapus semua catatan?");
    if (confirm) {
      setItems([]);
    }
  }
  return (
    <div className="app">
      <Logo />
      <Form items={items} setItems={setItems} />
      <CheckList
        items={items}
        setItems={setItems}
        onClearAll={handleClearAllItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
