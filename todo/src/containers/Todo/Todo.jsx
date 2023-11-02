import React, { useState, useEffect } from "react";
import "./todo.css";

import axios from "axios";

const Todo = () => {
  const [value, setValue] = useState("");
  const [task, setTask] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/tasks").then((res) => {
      setTask(res.data);
    });
  }, []);

  const getValue = (event) => {
    setValue(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/tasks", {
        task: value,
      })
      .then((res) => {
        const newTask = [...task, res.data];
        setTask(newTask);
        setValue("");
        console.log(task);
      });
  };

  const deleteTodo = (i) => {
    axios
      .delete(`http://localhost:3000/task/${i}`)
      .then((res) => {
        const updatedTask = task.filter((item) => item._id !== i);
        setTask(updatedTask);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <section className="todo">
      <form onSubmit={handleClick}>
        <input type="text" placeholder="Enter a task" onChange={getValue} />
        <button type="submit">Save</button>
      </form>
      {task.map((data, i) => (
        <div className="task" key={i}>
          <h2>{data.task}</h2>
          <button>Edit</button>
          <button onClick={() => deleteTodo(data._id)}>Delete</button>
        </div>
      ))}
    </section>
  );
};

export default Todo;
