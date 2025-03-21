import React from "react";
import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

export default function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChangeAndSubmit = (e) => {
    if (e.type === "change") {
      setInputValue(e.target.value);
    } else if (e.type === "submit") {
      e.preventDefault();
      console.log(inputValue);
      setInputValue("");
    }
  };

  return (
    <main className="max-w-[600px] mx-auto bg-white rounded-lg p-[20px]">
      <h1>
        <span className="text-gradient">Todo</span> List
      </h1>
      <TodoForm
        inputValue={inputValue}
        handleChangeAndSubmit={handleChangeAndSubmit}
      />
      <TodoList props={inputValue}/>
    </main>
  );
}
