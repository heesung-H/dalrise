import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface Todo {
    id: number;
    done: boolean;
    text: string;
}

export interface TodosSliceState {
    todos: Todo[];
}

const initialState: TodosSliceState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.todos = [
                ...state.todos,
                {
                    id: state.todos.length,
                    text: action.payload,
                    done: false,
                },
            ];
        },
        doneTodo: (state, action: PayloadAction<number>) => {
            const todo = state.todos.filter(({ id }) => id === action.payload)[0];
            todo.done = true;
            //state.todos[1] = todo;
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(({ id }) => id !== action.payload);
        },
    },
});

export const { addTodo, removeTodo, doneTodo } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todos.todos;

export default todoSlice.reducer;