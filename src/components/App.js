import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//  console.log("Here's the data you're working with");
//  console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [tasks, setTasks] = useState(TASKS);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskToDelete.id);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryChange}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={tasks} selectedCategory={selectedCategory} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
