import React, { useState } from "react";

interface FormProps {
  tasks: string[];
  setTasks: (tasks: string[]) => void;
}

export default function Form({ tasks, setTasks }: FormProps) {
  const [task, setTask] = useState("");

  const handleOnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleInputTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setTask(input);
  };

  return (
    <form className="form">
      <input type="text" value={task} onChange={handleInputTask} />
      <button type="submit" onClick={handleOnClick}>
        Insert Item
      </button>
    </form>
  );
}
