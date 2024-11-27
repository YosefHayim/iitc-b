import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todoSlice.js";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
