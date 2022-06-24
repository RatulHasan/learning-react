import React from "react";

export const initialState = {
  todos: [
    {
      id: 1,
      title: "Taste JavaScript",
      todoStatus: 1, // status is 0 for inactive and 1 for active.
    }
  ],
}

export const TodoReducer = (state = initialState, action: any) => {
  switch (action) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            title: action.payload.title,
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
    default:
      return state;
  }
}