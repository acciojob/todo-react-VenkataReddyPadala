import React, { useRef, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [todo, setTodo] = useState([]);
  const inputEl = useRef(null);
  return (
    <div>
      {/* Do not remove the main div */}
      <p>To-Do List</p>
      <input type="text" ref={inputEl} />
      <button
        onClick={() => {
          setTodo((cur) => [
            ...cur,
            { id: crypto.randomUUID(), data: inputEl.current.value },
          ]);
        }}
      >
        Add Todo
      </button>
      <ul>
        {todo.map((todoItem) => {
          return (
            <li key={todoItem.id}>
              <p>{todoItem.data}</p>
              <button
                onClick={() => {
                  const newData = todo.filter(
                    (item) => item.id !== todoItem.id
                  );
                  setTodo(newData);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
