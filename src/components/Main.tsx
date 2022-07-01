import  {useContext} from "@wordpress/element";
import {TodosContext} from "../context/TodoContext";

const Main = () => {
  const [state, dispatch]: any = useContext(TodosContext);
  const {todos, showTodos} = state;
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
    dispatch({type: 'TOGGLE_TODO', payload: {id: parseInt(event.target.id)}});
  };
  const deleteToDo = (event: any) => {
    //delete the todos.
    dispatch({type: 'DELETE_TODO', payload: {id: parseInt(event.target.id)}});
  };
  const handleInput = (event: any) => {
    if (event.target.name === "todo-item") {
      //set the todos status to 0 or 1
      handleToDo(event);
    }
    if (event.target.name === "delete-todo") {
      deleteToDo(event);
    }
  };
  const editTodo = (id: number) => {
    const editedTodo = todos.find((todo: { id: number; }) => todo.id === id);
    dispatch({type: 'EDIT_TODO', payload: {id: id, title: editedTodo.title, todoStatus: editedTodo.todoStatus}});
  }
  return (
    <div>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {filteredTodos().map((todo: any) => {
            return (
              <li className={0 === todo.todoStatus ? "completed" : ""} key={todo.id}>
                <div className="view">
                  <input
                    onChange={handleInput}
                    name="todo-item"
                    className="toggle"
                    type="checkbox"
                    id={todo.id}
                    checked={0 === todo.todoStatus}
                  />
                  <label onDoubleClick={() => editTodo(todo.id)}>{todo.title}</label>
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
