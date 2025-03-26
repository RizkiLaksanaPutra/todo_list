import React from "react";

const TodoList = ({
  tasks,
  toggleComplete,
  deleteTask,
  setFilter,
  currentFilter,
}) => {
  return (
    <>
      <div className="flex justify-center items-center gap-4 mb-4">
        <button
          className={`cursor-pointer rounded-sm border border-[#AB8BFF] px-2 py-1 hover:bg-[#AB8BFF] transition duration-300 ease-in-out ${
            currentFilter === "all" ? "bg-[#8355f7] text-white" : ""
          }`}
          onClick={() => setFilter("all")}
        >
          All List
        </button>
        <button
          className={`cursor-pointer rounded-sm border-1 border-[#AB8BFF] px-2 py-1 hover:bg-[#AB8BFF] transition duration-300 ease-in-out ${
            currentFilter === "active" ? "bg-[#8355f7] text-white" : ""
          }`}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={`cursor-pointer rounded-sm border-1 border-[#AB8BFF] px-2 py-1 hover:bg-[#AB8BFF] transition duration-300 ease-in-out ${
            currentFilter === "completed" ? "bg-[#8355f7] text-white" : ""
          }`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
      <ol className="list-none">
        {tasks.length === 0 ? (
          <li className="flex justify-center">
            <span>No Added Tasks</span>
          </li>
        ) : (
          tasks.map((task, index) => {
            return (
              <li key={index} className="flex justify-between items-center">
                <span
                  className={`flex-grow ${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {task.taskName}
                </span>
                <button
                  className="ml-2 cursor-pointer rounded-sm border border-[#AB8BFF] px-2 py-1 hover:bg-[#AB8BFF] transition duration-300 ease-in-out active:bg-[#8355f7]"
                  onClick={() => toggleComplete(index)}
                >
                  {task.completed ? "Done" : "Mark Done"}
                </button>
                <button
                  className="ml-2 cursor-pointer rounded-sm border-1 border-[#AB8BFF] px-2 py-1 hover:bg-[#AB8BFF] transition duration-300 ease-in-out active:bg-[#8355f7]"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </li>
            );
          })
        )}
      </ol>
    </>
  );
};

export default TodoList;
