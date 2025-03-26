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
          className={`filter-button ${
            currentFilter === "all" ? "bg-[#8355f7] text-white" : ""
          }`}
          onClick={() => setFilter("all")}
        >
          All List
        </button>
        <button
          className={`filter-button ${
            currentFilter === "active" ? "bg-[#8355f7] text-white" : ""
          }`}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={`filter-button ${
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
                  className="toggle-button"
                  onClick={() => toggleComplete(index)}
                >
                  {task.completed ? "Done" : "Mark Done"}
                </button>
                <button
                  className="toggle-button"
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
