const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/friends");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: String,
  description: String,
  completed: Boolean
});

const Todo = mongoose.model("Todo", todoSchema);

const myTodo = new Todo({
  title: "Learn Mongoose",
  description: "Kill me",
  completed: false,
  killJeremy: "He has a gun though"
});

// myTodo.save((err, todo) => {
//   console.log(todo, "Successfully added");
// });

// Todo.findOne({title: "Learn Mongoose"}, (err, todo) => {
//   todo.remove((err, todo) => {
//     console.log(todo, "Successfully Removed");
//   });
// });

Todo.find((err, todos) => {
  console.log(todos);
});
