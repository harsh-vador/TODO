import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const LOCAL_STORAGE_KEY = "react-do-list-todos";

    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

        if (storageTodos) {
            setTodos(storageTodos)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };


    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updatedTodos);
    };
    const deleteAll = id =>{
        console.log(id)
        const removeArr = [...todos].filter(todo => console.log(todo));

        setTodos(removeArr);
    }
    
    return (
        <div className="todo-context">
            <h1>To-Do List</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}  />
            <button className="todo-button" onClick={deleteAll}>Clear All</button>
        </div>
    );
}

export default TodoList;
