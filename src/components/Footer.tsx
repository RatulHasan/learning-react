import React from "react";

const Footer = ({ todos, setTodo, setShowTodos, showTodos }: any) => {
  const handleInput = (action: string) => {
    if ("clear_completed" === action) {
      //delete the completed todo
      setTodo(todos.filter((todo: any) => todo.todoStatus !== 0));
    }

    if ("active" === action || "completed" === action || "all" === action) {
      setShowTodos(action);
    }
  };
  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{todos.length}</strong> item left
        </span>
        <ul className="filters">
          <li>
            <a
              onClick={() => handleInput("all")}
              className={"all" === showTodos ? "selected" : ""}
              href="#/"
            >
              All
            </a>
          </li>
          <li>
            <a
              onClick={() => handleInput("active")}
              href="#/active"
              className={"active" === showTodos ? "selected" : ""}
            >
              Active
            </a>
          </li>
          <li>
            <a
              onClick={() => handleInput("completed")}
              href="#/completed"
              className={"completed" === showTodos ? "selected" : ""}
            >
              Completed
            </a>
          </li>
        </ul>
        <button
          onClick={() => handleInput("clear_completed")}
          className="clear-completed"
        >
          Clear completed
        </button>
      </footer>
    </div>
  );
};

export default Footer;
