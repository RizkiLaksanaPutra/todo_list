import React, { useState } from "react";

const InputText = () => {
  const [inputValue, setInputValue] = useState("");

  const getValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <form className="flex mb-[20px]" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new task"
        className="flex-1 p-[10px] text-[16px] border-[#AB8BFF] border-2 border-r-0 focus:outline-none focus:ring-0"
        value={inputValue}
        onChange={getValue}
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

export default InputText;
