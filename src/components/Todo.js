import React, { useState } from 'react';
import TodoList from './TodoList';
import { RiCloseCircleLine } from 'react-icons/ri';

function Todo({ todos, completeTodo, removeTodo }) {
 
    const checkDelete =()=>{
        todos.map((todo,index)=>(
            completeTodo(todo.id)
        ))
    }
    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <input type="checkbox" onClick={checkDelete} />
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
                
                
            </div>
        </div>
    ));
};

export default Todo;
