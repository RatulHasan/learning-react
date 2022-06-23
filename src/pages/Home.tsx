import "todomvc-common/base.css";
import "todomvc-app-css/index.css";
import "todomvc-common/base.js";

import Input from "../components/Input";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { useState } from "react";

export type Todo = {
  id: number;
  title: string;
  todoStatus: number;
};
function Home() {
  const [showTodos, setShowTodos] = useState("all");
  const activeTodos = (todos: Todo[] | []) => {
    return todos.filter((todo: any) => todo.todoStatus !== 0);
  };
  const [todos, setTodo] = useState<Todo[] | []>([
    {
      id: 1,
      title: "Taste JavaScript",
      todoStatus: 1, // status is 0 for inactive and 1 for active.
    },
  ]);
  return (
    <section className="todoapp">
      <Input setTodo={setTodo} todos={todos} showTodos={showTodos} />
      <Main setTodo={setTodo} todos={todos} showTodos={showTodos} />
      <Footer
        setTodo={setTodo}
        todos={activeTodos(todos)}
        setShowTodos={setShowTodos}
        showTodos={showTodos}
      />
    </section>
  );
}

export default Home;
