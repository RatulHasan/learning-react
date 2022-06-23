import React from "react";
import { Todo } from "../pages/Home";

const Main = ({ todos, setTodo, showTodos }: any) => {
  const filteredTodos: any = () => {
    if (showTodos === "all") {
      return todos;
    } else if (showTodos === "active") {
      return todos.filter((todo: any) => todo.todoStatus === 1);
    } else if (showTodos === "completed") {
      return todos.filter((todo: any) => todo.todoStatus === 0);
    }
  };

  const handleToDo = (event: any) => {
    const newTodo = [
      ...todos.map((todo: Todo) => {
        if (todo.id === parseInt(event.target.id)) {
          if (event.target.checked) {
            todo.todoStatus = 0;
          } else {
            todo.todoStatus = 1;
          }
        }
        return todo;
      }),
    ];
    setTodo(newTodo);
  };
  const deleteToDo = (event: any) => {
    //delete the todo
    setTodo(
      todos.filter((todo: Todo) => todo.id !== parseInt(event.target.id))
    );
  };
  const handleInput = (event: any) => {
    if (event.target.name === "todo-item") {
      //set the todo status to 0 or 1
      handleToDo(event);
    }
    if (event.target.name === "delete-todo") {
      deleteToDo(event);
    }
  };
  return (
    <div>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {filteredTodos().map((todo: any) => {
            return (
              <li
                className={0 === todo.todoStatus ? "completed" : ""}
                key={todo.id}
              >
                <div className="view">
                  <input
                    onChange={handleInput}
                    name="todo-item"
                    className="toggle"
                    type="checkbox"
                    id={todo.id}
                    checked={0 === todo.todoStatus}
                  />
                  <label>{todo.title}</label>
                  <button
                    name="delete-todo"
                    id={todo.id}
                    onClick={handleInput}
                    className="destroy"
                  ></button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Main;
