const express = require("express");
const {
  allTasks,
  addTask,
  deleteTask,
  searchTask,
} = require("../controllers/todo");
const router = express.Router();

router.get("/tasks", allTasks);
router.post("/addTask", addTask);
router.delete("/deleteTask/:id", deleteTask);
router.get("/tasks/search", searchTask);

module.exports = router;
