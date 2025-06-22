import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './slices/TodosSlice';
const store = configureStore({
    reducer: {
        todos: todoSlice.reducer
    }
});
export default store;