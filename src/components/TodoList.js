import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { LOCAL_STORAGE_KEY } from "../constants";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  const validateinput = (todo) => !todo || /^\s*$/.test(todo);

  const addTodo = (todo) => {
    if (validateinput(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (validateinput(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    setTodos((todo) => todo.filter((t) => t.id !== id));
  };
  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const deleteAll = () => {
    setTodos([]);
  };

  return (
    <div className="todo-context">
      <h1>To-Do List</h1>
      <TodoForm onSubmit={addTodo} />
      <div className="todo-list">
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
      {todos.length ? (
        <button className="todo-button" onClick={deleteAll}>
          Reset Tasks
        </button>
      ) : null}
    </div>
  );
}

export default TodoList;
