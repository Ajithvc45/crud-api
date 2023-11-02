const mongoose = require("mongoose");

// todo schema
const todoSchema = mongoose.Schema({
  task: {
    type: String,
    required: [true, "Please enter a task"],
  },
});

const Task = mongoose.model("Task", todoSchema);
module.exports = Task;
