import React, {useContext, useState} from "react";
import {TodosContext} from "../context/TodoContext";

const Input = () => {
  const [value, setValue] = useState<string>("");
  const [state, dispatch]: any= useContext(TodosContext);
  const handleInput = (event: any) => {
    if ("Enter" === event.key) {
      dispatch({type: 'ADD_TODO',payload: value});
      setValue("");
    }
  };
  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <input
          type="text"
          name="new-todo"
          onKeyDown={handleInput}
          onChange={(event) => setValue(event.target.value)}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          autoComplete="off"
          value={value}
        />
      </header>
    </div>
  );
};

export default Input;
