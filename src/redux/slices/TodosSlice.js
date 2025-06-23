import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const FILTRATION_TYPES = {
    ALL: "all",
    COMPLETED: "completed",
    IN_PROGRESS: "in-progress",
};


const TODOS_STORAGE_KEY = "TODOS";

export const loadTodos = createAsyncThunk("todos/loadTodos", async () => {
    try {
        const storedTodos = await AsyncStorage.getItem(TODOS_STORAGE_KEY);
        return storedTodos ? JSON.parse(storedTodos) : [];
    } catch (error) {
        console.error("Failed to load todos from storage", error);
        return [];
    }
});

export const saveTodos = createAsyncThunk("todos/saveTodos", async (todos) => {
    try {
        await AsyncStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
        console.error("Failed to save todos to storage", error);
    }
});


const todosSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
        filter: FILTRATION_TYPES.ALL,
    },
    reducers: {
        addTodo: (state, action) => {
            const newTodo = action.payload;
            state.todos.push(newTodo);
        },
        updateTodo: (state, action) => {
            const { id, updates } = action.payload;
            const index = state.todos.findIndex(todo => todo.id === id);
            if (index !== -1) {
                state.todos[index] = { ...state.todos[index], ...updates };
            }
        },
        deleteTodo: (state, action) => {
            const id = action.payload;
            state.todos = state.todos.filter((todo) => todo.id !== id);
        },
        toggleCompleted: (state, action) => {
            const id = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        updateFilter: (state, action) => {
            const filter = action.payload;
            state.filter = filter;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadTodos.fulfilled, (state, action) => {
            state.todos = action.payload;
        });
    }
})

export const { addTodo, deleteTodo, toggleCompleted, updateFilter, updateTodo  } = todosSlice.actions;
export default todosSlice;


