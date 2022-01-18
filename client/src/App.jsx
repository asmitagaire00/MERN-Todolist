/* eslint-disable no-underscore-dangle */
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoList from './TodoList';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  // get request and post request
  useEffect(() => {
    axios.get('http://localhost:3001/todos/').then((response) => {
      setTodoList(response.data);
    });
  }, []);

  // create todo
  const createTodo = (e) => {
    e.preventDefault();
    setTodoInput('');

    axios.post('http://localhost:3001/todos/', { name: todoInput }).then(({ data }) => {
      setTodoList([...todoList, data]);
    });
  };

  // delete todo
  const toDelete = (deleteTodo) => {
    axios
      .delete(`http://localhost:3001/todos/${deleteTodo._id}`)
      .then(() => {
        const newTodoList = todoList.filter((todo) => todo._id !== deleteTodo._id);
        setTodoList(newTodoList);
      })
      .catch((e) => {
        console.log('Could not delete todo: ', e);
      });
  };

  // update todo
  const updateTodo = (updatedTodo) => {
    axios
      .put(`http://localhost:3001/todos/${updatedTodo._id}`, { name: updatedTodo.name })
      .then(({ data }) => {
        const newTodoList = todoList.map((todo) => {
          if (todo._id === data._id) {
            return {
              _id: data._id,
              name: data.name,
            };
          }
          return todo;
        });

        setTodoList(newTodoList);
      })
      .catch((e) => {
        console.log('Error updating todo: ', e);
      });
  };

  return (
    <div className="App">
      <div className="section-input">
        <input
          type="text"
          placeholder="Todo...."
          onChange={(event) => setTodoInput(event.target.value)}
          value={todoInput}
        />

        <button type="button" onClick={createTodo} disabled={!todoInput}>
          Add Todo
        </button>
      </div>

      <TodoList
        todoList={todoList}
        todoInput={todoInput}
        toDelete={toDelete}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
