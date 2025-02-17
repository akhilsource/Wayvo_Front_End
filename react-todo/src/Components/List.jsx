import React, { useState } from "react";
import Button from "./Button.jsx";
import "./List.css";
import Tablerow from "./Tablerow.jsx";

function List() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTask, setEditedTask] = useState({ name: "", date: "" });

  function add() {
    if (taskName.trim() === "" || dueDate.trim() === "") return;
    setTasks([...tasks, { name: taskName, date: dueDate }]);
    setTaskName("");
    setDueDate("");
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function startEditing(index) {
    setEditingIndex(index);
    setEditedTask(tasks[index]);
  }

  function handleEditChange(e) {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  }

  function saveEdit(index) {
    const updatedTasks = tasks.map((task, i) => (i === index ? editedTask : task));
    setTasks(updatedTasks);
    setEditingIndex(null);
  }
  return (
    <div className="table">
      <input
        type="text"
        className="input"
        placeholder="Enter task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="date"
        className="input"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <br></br>
      <Button text="Add Task" onClick={add} />

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name of Task</th>
            <th>Due Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <Tablerow
              key={index}
              index={index}
              task={task}
              editingIndex={editingIndex}
              editedTask={editedTask}
              onclick_edit={startEditing}
              onClick_delete={deleteTask}
              handleEditChange={handleEditChange}
              saveEdit={saveEdit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;