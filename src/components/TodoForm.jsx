import React from "react";

const TodoForm = ({ newTask, handleInputChange, handleSubmit }) => {
  return (
    <form
      className="flex flex-col gap-1 sm:flex-row sm:items-center mb-[20px]"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Add new task"
        className="input-field flex-grow"
        required
        onChange={handleInputChange}
        value={newTask}
      />
      <button className="submit-button w-full sm:w-auto" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
