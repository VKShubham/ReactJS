import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/TodoSlice";

function Todos() {
    const todos = useSelector(state => state.todos.todoList);
    const dispatch = useDispatch();

    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id} className="flex items-center justify-between border-b border-black/10 py-2">
                    <p>{todo.title}</p>
                    <button onClick={() => dispatch(removeTodo(todo.id))} className="bg-red-600 text-white px-3 py-1 rounded-lg">
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Todos;
