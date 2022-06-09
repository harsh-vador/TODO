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

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }

    const removeTodo = id => {
        setTodos((todo)=>todo.filter(t => t.id !== id))
    };

    const completeTodo = id => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updatedTodos);
    };
    const deleteAll = () =>{
        setTodos([]);
    }
    
    return (
        <div className="todo-context">
            <h1>To-Do List</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}  updateTodo={updateTodo}/>
            <button className="todo-button" onClick={deleteAll}>Delete All</button>
        </div>
    );
}

export default TodoList;
