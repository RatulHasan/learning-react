import React, { useState } from "react";

const Input = ({ setTodo, todos }: any) => {
  const [value, setValue] = useState<string>("");
  const handleInput = (event: any) => {
    if ("Enter" === event.key) {
      setTodo([
        ...todos,
        {
          id: todos.length + 1,
          title: value,
          todoStatus: 1,
        },
      ]);
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
