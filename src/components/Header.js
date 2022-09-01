import React, { useState } from "react";
import { Todolists } from "./Todolists";

export const Header = () => {
  const [inpStatus, setInpStatus] = useState(false);
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  // Handler for 
  let getTask = () => {
    if (task.trim().length === 0) {
      alert("Please Enter a Task");
    } else {
      let copy = [...todos, task];
      setTodos(copy);
      setTask("");
      setInpStatus(!inpStatus);
    }
  };
  return (
    <>
      <div className="header">
        <button
          onClick={() => {
            setInpStatus(!inpStatus);
          }}
          className="btn header_btn"
        >
          +
        </button>
        <h1 className="header_text">todo's</h1>
      </div>
      {inpStatus ? (
        <div className="input_div">
          <input
            type="text"
            placeholder="Enter Task"
            autoFocus
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <button onClick={getTask}>Add</button>
        </div>
      ) : null}
      <Todolists todos={todos} setTodos={setTodos} />
    </>
  );
};
