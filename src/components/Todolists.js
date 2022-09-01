import React from "react";

export const Todolists = ({ todos, setTodos }) => {
  // Handler for deleting task
  let delTodo = (i) => {
    let copy = todos.filter((value, index) => {
      return index !== i;
    });
    setTodos(copy);
  };

  // Handler for complete task
  let taskCompleted = (e) => {
    e.target.classList.toggle('taskComplete')
  };
  return (
    <>
      {todos.length !== 0
        ? todos.map((task, i) => {
            return (
              <div className="todoLists">
                <h2 onClick={taskCompleted} className="header_text task_text">
                  {task}
                </h2>
                <button
                  onClick={() => {
                    delTodo(i);
                  }}
                  className="btn header_btn delBtn"
                >
                  x
                </button>
              </div>
            );
          })
        : null}
    </>
  );
};
