import React from "react";

const TodoList = (props) => {
  return (
    <>
      <div className="flex justify-center items-center gap-4 mb-4">
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
      <ol className="list-none">
        {props.tasks.map((task, index) => {
            return (
            <li key={index} className="flex justify-between items-center">
              <span className="flex-grow">{task}</span>
              <button className="ml-2 cursor-pointer rounded-sm border-1 border-[#AB8BFF] px-2 py-1 hover:bg-[#AB8BFF] transition duration-300 ease-in-out focus:bg-[#8355f7]">Done</button>
              <button className="ml-2 cursor-pointer rounded-sm border-1 border-[#AB8BFF] px-2 py-1 hover:bg-[#AB8BFF] transition duration-300 ease-in-out focus:bg-[#8355f7]">Delete</button>
            </li>
            );
        })}
      </ol>
    </>
  );
};

export default TodoList;
