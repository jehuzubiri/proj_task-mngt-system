import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccInitStateType, Person } from "@/helpers/Model";

const initialState: AccInitStateType = {
  accountList: [],
  accountDetails: {},
  isLoggedin: false,
};

const accountSlice = createSlice({
  name: "accountstore",
  initialState,
  reducers: {
    addAccount: (state, action: PayloadAction<Person>) => {
      state.accountList.push(action.payload);
    },
    signIn: (state, action: PayloadAction<Person>) => {
      state.accountDetails = action.payload;
      state.isLoggedin = true;
    },
    logOut: (state, action: any) => {
      state.accountDetails = {};
      state.isLoggedin = false;
    },
  },
});

const { reducer, actions } = accountSlice;
export const { addAccount, signIn, logOut } = actions;
export default reducer;
