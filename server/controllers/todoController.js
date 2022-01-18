const todoService = require("../services/todoService");

const todoController = {
  getTodos: function (req, res, next) {
    todoService
      .getTodos()
      .then((todos) => {
        return res.status(200).json(todos);
      })
      .catch(next);
  },

  createTodo: function (req, res, next) {
    const todo = req.body;

    todoService
      .createTodo(todo)
      .then((createdTodo) => {
        return res.json(createdTodo);
      })
      .catch(next);
  },

  updateTodo: function (req, res, next) {
    const todoId = req.params.todoId;
    const todo = req.body;

    todoService
      .updateTodo(todoId, todo)
      .then((updatedTodo) => {
        return res.status(200).json(updatedTodo);
      })
      .catch(next);
  },

  deleteTodo: function (req, res, next) {
    const todoId = req.params.todoId;

    todoService
      .deleteTodo(todoId)
      .then((todos) => {
        return res.status(200).json(todos);
      })
      .catch(next);
  },
};

module.exports = todoController;
