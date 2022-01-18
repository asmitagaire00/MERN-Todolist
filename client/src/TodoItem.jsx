import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo, toDelete, updateTodo }) {
  const { _id, name } = todo;
  const [editedTodo, setEditedTodo] = useState(name);

  const handleEdit = () => {
    updateTodo({ _id, name: editedTodo });
  };

  const handleDelete = () => {
    toDelete({ _id, todo });
  };

  return (
    <div style={{ margin: '15px' }}>
      <div className="todoItem">
        <div>
          <input type="text" value={editedTodo} onChange={(e) => setEditedTodo(e.target.value)} />
        </div>
        <div className="todoItem-buttons">
          {name !== editedTodo && (
            <button type="button" onClick={handleEdit}>
              Save
            </button>
          )}
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({ _id: PropTypes.string.isRequired, name: PropTypes.string.isRequired })
    .isRequired,
  toDelete: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default TodoItem;
