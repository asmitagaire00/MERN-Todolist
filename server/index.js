require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const TodoModel = require("./models/Todo");
const todoController = require("./controllers/todoController");

app.use(express.json());
app.use(cors());

const PORT = 3001;

mongoose
  .connect(
    `mongodb+srv://dbUser:${process.env.MONGO_PWD}@mycluster.cedva.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Database connected.");
    app.listen(PORT, () => {
      console.log("Server running");
    });
  })
  .catch((e) => {
    console.log("Could not connect db!", e);
  });

app.get("/todos/", todoController.getTodos);
app.post("/todos/", todoController.createTodo);
app.put("/todos/:todoId", todoController.updateTodo);
app.delete("/todos/:todoId", todoController.deleteTodo);

app.use((err, req, res, next) => {
  console.log("error: ", err);
  res.status(500).json({ message: "Internaal server error" });
});
