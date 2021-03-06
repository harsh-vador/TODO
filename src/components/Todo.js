import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  const deleteCheckBox = (id) => {
    completeTodo(id);
  };

  return (
    <>
      {edit.id ? (
        <TodoForm edit={edit} onSubmit={submitUpdate} />
      ) : (
        todos.map((todo, index) => (
          <div
            className={todo.isComplete ? "todo-row complete" : "todo-row"}
            key={index}
          >
            <div className="todo">
              <input type="checkbox" onClick={() => deleteCheckBox(todo.id)} />
              <div
                className="todo-content"
                key={todo.id}
                onClick={() => deleteCheckBox(todo.id)}
              >
                {todo.text}
              </div>
            </div>
            <div className="icons">
              <TiEdit
                onClick={() => setEdit({ id: todo.id, value: todo.text })}
                className="edit-icon"
              />
              <RiCloseCircleLine
                onClick={() => removeTodo(todo.id)}
                className="delete-icon"
              />
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default Todo;
