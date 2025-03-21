import React from "react";

const TodoList = (props) => {
  return (
    <>
      <div className="flex justify-center items-center gap-4">
        <button className="cursor-pointer rounded-sm border-1 border-[#AB8BFF] px-2 py-1 hover:bg-[#AB8BFF] transition duration-300 ease-in-out focus:bg-[#8355f7]">
          All List
        </button>
        <button className="cursor-pointer rounded-sm border-1 border-[#AB8BFF] px-2 py-1 hover:bg-[#AB8BFF] transition duration-300 ease-in-out focus:bg-[#8355f7]">
          Active
        </button>
        <button className="cursor-pointer rounded-sm border-1 border-[#AB8BFF] px-2 py-1 hover:bg-[#AB8BFF] transition duration-300 ease-in-out focus:bg-[#8355f7]">
          Completed
        </button>
      </div>
      <ul className="list-none">
        <li>{props.inputValue}</li>
      </ul>
    </>
  );
};

export default TodoList;
