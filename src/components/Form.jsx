import { useState } from "react";

function Form({ items, setItems }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (title) {
      const newList = { id: items.length + 1, title: title, isDone: false };
      setItems([...items, newList]);
      setTitle("");
    }
  }

  return (
    <form action="" className="add-form" onSubmit={handleSubmit}>
      <h3>Catatan Baru</h3>
      <input
        type="text"
        name="title"
        id=""
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button>add</button>
    </form>
  );
}

export default Form;
