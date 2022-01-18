const TodoModel = require("../models/Todo");

const todoService = {
  getTodos: async function () {
    return await TodoModel.find();
  },

  createTodo: async function (todo) {
    const newTodo = new TodoModel(todo);
    return await newTodo.save();
  },

  updateTodo: async function (todoId, todo) {
    return await TodoModel.findByIdAndUpdate(todoId, todo, {
      new: true,
    });
  },

  deleteTodo: async function (todoId) {
    await TodoModel.findByIdAndDelete(todoId);
    return await TodoModel.find();
  },
};

module.exports = todoService;
