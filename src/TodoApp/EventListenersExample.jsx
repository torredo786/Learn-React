import React, { useState } from "react";
import "./todo.css";

const EventListenersExample = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [inputFocused, setInputFocused] = useState(false);

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };
  const handleKeyDown = (e) => {
    console.log("e,", e);
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  // Function to handle task removal
  const handleRemove = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    console.log(newTodos)
    setTodos(newTodos);
  };

  return (
    <div className="todo-app">
      <h1>Event Listeners Examples</h1>
      
      <form onSubmit={handleSubmit} className="todo-form">
        <input 
          type="text" 
          value={task} 
          onChange={handleChange} 
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder="Add a new task"
          style={{
            border: inputFocused ? "2px solid #3498db" : "1px solid #bdc3c7",
          }}
          className="todo-input"
        />
        <button className="todo-button">Add Task</button>
      </form>

      <ul className="todo-list">
        {todos.map((todo, index) =>
          <li key={index} >
            <span >{todo}</span>
            <button
            className="li-button"
              onClick={() => handleRemove(index)}
              
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e74c3c';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#e74c3c';
              }}
            >
              Remove
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default EventListenersExample;
