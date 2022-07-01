import  {useContext, useState, useRef, useEffect} from "@wordpress/element";
import {TodosContext} from "../context/TodoContext";

const Input = () => {
  const inputRef = useRef<any>(null);
  const [value, setValue] = useState<string>("");
  const [state, dispatch]: any= useContext(TodosContext);
  const handleInput = (event: any) => {
    if ("Enter" === event.key) {
      if (state.editTodo.id === 0) {
        // add todos.
        dispatch({type: 'ADD_TODO', payload: value});
      }else{
        //update the todos.
        dispatch({type: 'UPDATE_TODO', payload: {id: state.editTodo.id, title: value, todoStatus: state.editTodo.todoStatus}});
      }
      setValue("");
    }
  };
  useEffect(() => {
    inputRef.current.focus();

    // Edit todos.
    if (state.editTodo.id !== 0) {
      inputRef.current.value = state.editTodo.title;
    }
  },[state.editTodo]);
  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <input
          ref={inputRef}
          type="text"
          name="new-todo"
          onKeyDown={handleInput}
          onChange={(event) => setValue(event.target.value)}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={value}
        />
      </header>
    </div>
  );
};

export default Input;
