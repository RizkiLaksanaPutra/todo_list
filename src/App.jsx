import React from "react";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const savedData = localStorage.getItem("savedTasks");
    return savedData ? JSON.parse(savedData) : [];
  });

  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      const updatedTasks = [...tasks, { taskName: newTask, completed: false }];
      setTasks(updatedTasks);
      setNewTask("");
    }
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  useEffect(() => {
    localStorage.setItem("savedTasks", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <main className="max-w-[600px] mx-auto bg-white rounded-lg p-[20px]">
      <h1>
        <span className="text-gradient">Todo</span> List
      </h1>
      <TodoForm
        newTask={newTask}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <TodoList
        tasks={filteredTasks}
        currentFilter={filter}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        setFilter={setFilter}
      />
    </main>
  );
}
