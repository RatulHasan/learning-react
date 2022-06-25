import React from "react";

export const initialState = {
  todos: [
    {
      id: 1,
      title: "Taste JavaScript",
      todoStatus: 1, // status is 0 for inactive and 1 for active.
    }
  ],
  showTodos: "all",
}

export const TodoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            title: action.payload,
            todoStatus: 1,
          },
        ]
      }
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo: any) => {
            if (todo.id === action.payload.id) {
              return {
                ...todo,
                todoStatus: todo.todoStatus === 1 ? 0 : 1,
              }
            }
            return todo;
          }
        )
      }
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo: any) => todo.id !== action.payload.id)
      }
    case "DELETE_COMPLETED_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo: any) => todo.todoStatus === 1)
      }
    case "SHOW_ALL":
      return {
        ...state,
        showTodos: "all"
      }
    case "SET_SHOW_TODOS":
      return {
        ...state,
        showTodos: action.payload.showTodos
      }
    default:
      return state;
  }
}