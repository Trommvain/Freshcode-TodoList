import ACTION_TYPES from "./actionTypes";

export function addTodoAction(value) {
  const action = { type: ACTION_TYPES.ADD_TODO, payload: value };
  return action;
}

export function deleteTodoAction(id) {
  const action = { type: ACTION_TYPES.DELETE_TODO, payload: id };
  return action;
}

export function toggleTodoAction(id) {
  const action = { type: ACTION_TYPES.TOGGLE_TODO, payload: id };
  return action;
}
