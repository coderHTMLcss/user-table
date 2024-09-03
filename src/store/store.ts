import { configureStore } from "@reduxjs/toolkit";
import users from "./slices/usersSlice";
import filter from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    users,
    filter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
