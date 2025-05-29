import React, { useState } from "react";

const Eight = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const add = (e) => {
    e.preventDefault();
    setItems((prev) => [...prev, input]);
    setInput("");
  };

  const handleRemove = (key) => {
    setItems((prev) => prev.filter((_, index) => index !== key));
  };
  return (
    <div>
      <form action="" onSubmit={add}>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button onClick={add}>Add</button>
      </form>
      {console.log("<form action=", items)}

      {items.map((item, key) => (
        <div>
          <ul style={{ display: "flex", gap: "10px" }}>
            <li>{item}</li>
            <button onClick={() => handleRemove(key)}>remove</button>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Eight;
