import ACTION_TYPES from "./actionTypes";
import { v4 as uuidv4 } from "uuid";

export const initialState = {
  todoItems: [],
  scroll: false, //нужно для работы автоскролла в конец todoList
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADDTODO: {
      const todoObj = {
        id: uuidv4(),
        text: action.payload,
        isDone: false,
      };
      const newTodoArr = state.todoItems;
      newTodoArr.push(todoObj);
      return {
        todoItems: newTodoArr,
        scroll: !state.scroll,
      };
    }

    case ACTION_TYPES.DELETETODO: {
      const newTodoArr = state.todoItems.filter(
        (item) => item.id !== action.payload
      );
      return {
        todoItems: newTodoArr,
        scroll: state.scroll,
      };
    }

    case ACTION_TYPES.TOGGLETODO: {
      const newTodoArr = state.todoItems.map((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone;
        }
        return item;
      });
      return {
        todoItems: newTodoArr,
        scroll: state.scroll,
      };
    }

    default:
      return state;
  }
};
