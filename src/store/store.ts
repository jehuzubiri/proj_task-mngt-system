import { configureStore } from "@reduxjs/toolkit";

//Features
import accountSlice from "./feature/accountSlice";
import tasksSlice from "./feature/tasksSlice";

const rootReducers = {
  accountstore: accountSlice,
  tasksstore: tasksSlice,
};

export const store = configureStore({
  reducer: rootReducers,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
