const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const Task = require("./models/todoModel");
// const User = require("./models/userModel");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// routes
const authRoutes = require("./routes/auth");
const todo = require("./routes/todo");

//environment variable
app.use(cors());
app.use("/api", authRoutes);
app.use("/api", todo);

mongoose
  .connect(
    "mongodb+srv://ajithvc45:Ajithvc45@cluster0.sq4kclp.mongodb.net/todo?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log(`Node API app is running on port 3000`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
