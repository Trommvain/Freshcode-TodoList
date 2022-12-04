import ACTION_TYPES from "./actionTypes";

export function addTodoAction(value) {
  const action = { type: ACTION_TYPES.ADDTODO, payload: value };
  return action;
}

export function deleteTodoAction(id) {
  const action = { type: ACTION_TYPES.DELETETODO, payload: id };
  return action;
}

export function toggleTodoAction(id) {
  const action = { type: ACTION_TYPES.TOGGLETODO, payload: id };
  return action;
}
