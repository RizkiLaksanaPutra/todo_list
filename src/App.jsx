import React from "react";
import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

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
      <TodoList tasks={tasks} />
    </main>
  );
}
