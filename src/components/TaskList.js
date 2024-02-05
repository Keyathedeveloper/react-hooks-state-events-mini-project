import React from "react";
import Task from "./Task";

function TaskList({ tasks, selectedCategory = "", onDeleteTask }) {
  const filteredTasks =
    selectedCategory === "" ? tasks : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="tasks">
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} onDeleteTask={onDeleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
