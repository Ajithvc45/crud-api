const Task = require("../models/todoModel");

// all tasks
exports.allTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// add task
exports.addTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete task
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res
        .status(404)
        .json({ message: `cannot find any task with ID ${id}` });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// search task
exports.searchTask = async (req, res) => {
  const searchQuery = req.query.q;
  try {
    const tasks = await Task.find({
      task: { $regex: new RegExp(searchQuery, "i") }, // 'i' for case-insensitive search
    });
    if (tasks.length === 0) {
      return res.json({ message: "Search result not found" });
    }
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
