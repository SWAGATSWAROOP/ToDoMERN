//First Import Store from core redux Lib
import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../Features/Todo/todoSlice";

// Export this store
export const store = configureStore({
  reducer: todoSlice,
});
