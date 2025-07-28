import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Features/ToDo/todoslice';

export const store = configureStore({
  reducer: {
    todos: todoReducer
  }
});
