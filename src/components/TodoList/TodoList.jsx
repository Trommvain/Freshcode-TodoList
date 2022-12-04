import React, { useReducer, useRef, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import styles from "./TodoList.module.scss";
import TodoListItem from "../TodoListItem/TodoListItem";
import {
  addTodoAction,
  deleteTodoAction,
  toggleTodoAction,
} from "../actionCreators";
import { reducer, initialState } from "../reducer";

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const elemRef = useRef();

  //автоскролл в конец списка при добавлении новой записи
  //scroll в стэйте меняется только при добавлении todo,
  //удаление или изменение не влияют на него
  useEffect(() => {
    const elem = elemRef.current;
    elem.scrollTop = elem.scrollHeight;
  }, [state.scroll]);

  const hanldeSubmit = (value, formikBag) => {
    if (value.todoInput.trim()) {
      dispatch(addTodoAction(value.todoInput));
      formikBag.resetForm();
    }
  };

  const deleteTodo = (id) => {
    dispatch(deleteTodoAction(id));
  };

  const toggleTodo = (id) => {
    dispatch(toggleTodoAction(id));
  };

  const todoItems = state.todoItems.map((item) => {
    return (
      <TodoListItem
        todoItem={item}
        key={item.id}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    );
  });

  return (
    <main className={styles.container}>
      <Formik initialValues={{ todoInput: "" }} onSubmit={hanldeSubmit}>
        <Form className={styles.form}>
          <Field
            className={styles.input}
            type="text"
            name="todoInput"
            placeholder="What are you gonna do?"
          />
          <button className={styles.addBtn} type="submit">
            ADD
          </button>
        </Form>
      </Formik>
      <section className={styles.todoBlock} ref={elemRef}>
        {todoItems.length === 0 ? (
          <p className={styles.placeholder}>There's nothing here yet...</p>
        ) : (
          todoItems
        )}
      </section>
    </main>
  );
};

export default TodoList;
