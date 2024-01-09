import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MainInitStateType, Person } from "@/helpers/Model";

const initialState: MainInitStateType = {
  accountList: [],
  accountDetails: {},
  isLoggedin: false,
};

const accountSlice = createSlice({
  name: "accountstore",
  initialState,
  reducers: {
    addAccount: (state, action: PayloadAction<Person>) => {
      const { id, givenname, isGoogle, imgUrl, username, password } =
        action.payload;
      state.accountList.push({
        id,
        givenname,
        isGoogle,
        imgUrl,
        username,
        password,
      });
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
