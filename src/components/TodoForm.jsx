import React from "react";

const TodoForm = ({ inputValue, handleChangeAndSubmit }) => {
  return (
    <form className="flex mb-[20px]" onSubmit={handleChangeAndSubmit}>
      <input
        type="text"
        placeholder="Add new task"
        className="flex-1 p-[10px] text-[16px] border-[#AB8BFF] border-2 border-r-0 focus:outline-none focus:ring-0"
        value={inputValue}
        onChange={handleChangeAndSubmit}
        required
      />
      <button
        className="py-[10px] px-[15px] bg-white border-[#AB8BFF] border-2 text-[16px] cursor-pointer hover:bg-[#AB8BFF] transition duration-300 ease-in-out"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
