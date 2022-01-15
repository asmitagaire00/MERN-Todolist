import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/todos/").then((response) => {
      setTodoList(response.data);
    });
  }, []);

  const createTodo = () => {
    console.log("todoInput", todoInput);

    axios
      .post("http://localhost:3001/todos/", { name: todoInput })
      .then((response) => {
        setTodoList([...todoList, { todoInput }]);
        console.log("todoList", response.data);
      });
  };

  return (
    <div className="App">
      <div>
        {todoList.map((todo) => {
          return <h1>{todo.name}</h1>;
        })}
      </div>

      <div className="section-input">
        <input
          type="text"
          placeholder="Todo...."
          onChange={(event) => setTodoInput(event.target.value)}
        />
        <button onClick={createTodo}>Add Todos</button>
      </div>
    </div>
  );
}

export default App;
