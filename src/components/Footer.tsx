import React, {useContext} from "react";
import {TodosContext} from "../context/TodoContext";

const Footer = () => {
  const [state, dispatch]: any = useContext(TodosContext);
  const todos = state.todos;
  const showTodos = state.showTodos;

  const handleInput = (action: string) => {
    if ("clear_completed" === action) {
      //delete the completed todos.
      dispatch({type: 'DELETE_COMPLETED_TODO'});
    }

    if ("active" === action || "completed" === action || "all" === action) {
      dispatch({type: 'SET_SHOW_TODOS', payload: {showTodos: action}});
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
            <a onClick={() => handleInput("all")} className={"all" === showTodos ? "selected" : ""} href="#/">
              All
            </a>
          </li>
          <li>
            <a onClick={() => handleInput("active")} href="#/active" className={"active" === showTodos ? "selected" : ""}>
              Active
            </a>
          </li>
          <li>
            <a onClick={() => handleInput("completed")} href="#/completed" className={"completed" === showTodos ? "selected" : ""}>
              Completed
            </a>
          </li>
        </ul>
        <button onClick={() => handleInput("clear_completed")} className="clear-completed">
          Clear completed
        </button>
      </footer>
    </div>
  );
};

export default Footer;
