import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

function TodoList({ todoList, toDelete, updateTodo }) {
  return (
    <div>
      {todoList.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.name + index.toString()}
            toDelete={toDelete}
            updateTodo={updateTodo}
          />
        );
      })}
    </div>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({ _id: PropTypes.string.isRequired, name: PropTypes.string.isRequired })
      .isRequired
  ).isRequired,
  toDelete: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default TodoList;
