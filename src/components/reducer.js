import ACTION_TYPES from "./actionTypes";
import { v4 as uuidv4 } from "uuid";

export const initialState = {
  todoItems: [],
  scroll: false, //нужно для работы автоскролла в конец todoList
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO: {
      const todoObj = {
        id: uuidv4(),
        text: action.payload,
        isDone: false,
      };

      return {
        todoItems: [...state.todoItems, todoObj],
        scroll: !state.scroll,
      };
    }

    case ACTION_TYPES.DELETE_TODO: {
      return {
        ...state,
        todoItems: state.todoItems.filter((item) => item.id !== action.payload),
      };
    }

    case ACTION_TYPES.TOGGLE_TODO: {
      return {
        ...state,
        todoItems: state.todoItems.map((item) => ({
          ...item,
          isDone: item.id === action.payload ? !item.isDone : item.isDone,
        })),
      };
    }

    default:
      return state;
  }
};
