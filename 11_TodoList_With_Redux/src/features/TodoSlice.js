import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todoList: [{ id: 1, title: 'Todo 1' }]
};

const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
        }
    }
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
