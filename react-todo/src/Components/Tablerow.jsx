import React from "react";
import Button from "./Button.jsx";
import "./Tablerow.css";

function Tablerow({ index, task, editingIndex, editedTask, onclick_edit, onClick_delete, handleEditChange, saveEdit }) {
  if (!task || !task.name || !task.date) {
    return null;
  }

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        {editingIndex === index ? (
          <input type="text" name="name" value={editedTask.name} onChange={handleEditChange} />
        ) : (
          task.name
        )}
      </td>
      <td>
        {editingIndex === index ? (
          <input type="date" name="date" value={editedTask.date} onChange={handleEditChange} />
        ) : (
          task.date
        )}
      </td>
      <td>
        {editingIndex === index ? (
          <Button text="Save" onClick={() => saveEdit(index)} />
        ) : (
          <Button text="Edit" onClick={(e) => onclick_edit(index)} />
        )}
      </td>
      <td>
        <Button text="Delete" onClick={() => onClick_delete(index)} />
      </td>
    </tr>
  );
}

export default Tablerow;
