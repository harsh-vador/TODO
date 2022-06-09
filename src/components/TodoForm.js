import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={props.edit ? "Update Your Item" : "Add a Todo"}
        value={input}
        name="text"
        className={props.edit ? "todo-input edit" : "todo-input"}
        onChange={handleChange}
        ref={inputRef}
      />
      <button
        onClick={handleSubmit}
        className={props.edit ? "todo-button edit" : "todo-button"}
      >
        {props.edit ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default TodoForm;
