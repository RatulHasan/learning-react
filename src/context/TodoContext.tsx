import  {createContext, useReducer} from "@wordpress/element";
import {TodoReducer, initialState} from "../reducer/TodoReducer";

// @ts-ignore
export const TodosContext = createContext();

export const TodosProvider = (props: any) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  return (
    <TodosContext.Provider value={[state, dispatch]}>
      {props.children}
    </TodosContext.Provider>
  )
}