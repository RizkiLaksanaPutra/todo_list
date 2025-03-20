import React from "react";

const InputText = () => {
  return (
    <form className="flex mb-[20px]">
      <input
        type="text"
        placeholder="Add new task"
        id="task-input"
        className="flex-1 p-[10px] text-[16px] border-[#AB8BFF] border-2 border-r-0"
        required
      />
      <button className="py-[10px] px-[15px] bg-white border-[#AB8BFF] border-2 text-[16px] cursor-pointer hover:bg-[#AB8BFF] transition duration-300 ease-in-out">
        Add
      </button>
    </form>
  );
};

export default InputText;
