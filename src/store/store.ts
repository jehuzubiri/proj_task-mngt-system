import { configureStore } from "@reduxjs/toolkit";

//Features
import accountSlice from "./feature/accountSlice";

const rootReducers = {
  accountstore: accountSlice,
};

export const store = configureStore({
  reducer: rootReducers,
});

export default store;
