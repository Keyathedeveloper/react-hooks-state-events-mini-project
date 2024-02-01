import React from "react";

function Task({task, onDeleteTask}) {
  const { text, category } = task;

  //Function to handle the delete button click.
  const handleDeleteClick = () => {
//Call callback prop to signal delete to parent
    if (onDeleteTask)
    {onDeleteTask(task);}
  };


  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteClick}>X</button>
    </div>
  );
}

export default Task;
