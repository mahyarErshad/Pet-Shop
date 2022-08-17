import { createSlice } from "@reduxjs/toolkit";

interface IState {
  isLoggedIn: boolean;
  userEmail: string;
}

const initialState: IState = {
  loggedIn: false,
  userEmail: "",
};

const loginReducer = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.loggedIn = true;
      state.userEmail = action.payload;
    },
    setLoggedOut: (state) => {
      state.loggedIn = false;
      state.userEmail = "";
    },
  },
});
export const { setLoggedIn, setLoggedOut } = loginReducer.actions;
export default loginReducer.reducer;
