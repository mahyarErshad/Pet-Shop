import { createSlice } from "@reduxjs/toolkit";

interface IState {
  loggedIn: boolean;
  userEmail: string;
  emailError: boolean;
  passwordError: boolean;
  emailErrorMessage: string;
  passwordErrorMessage: string;
}

const initialState: IState = {
  loggedIn: false,
  userEmail: "",
  emailError: false,
  passwordError: false,
  emailErrorMessage: "",
  passwordErrorMessage: "",
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
    setEmailError: (state, action) => {
      state.emailError = true;
      state.emailErrorMessage = action.payload;
    },
    setPasswordError: (state, action) => {
      state.passwordError = true;
      state.passwordErrorMessage = action.payload;
    },
    clearEmailError: (state) => {
      state.emailError = false;
      state.emailErrorMessage = "";
    },
    clearPasswordError: (state) => {
      state.passwordError = false;
      state.passwordErrorMessage = "";
    },
  },
});

export const { setLoggedIn, setLoggedOut, setEmailError, setPasswordError, clearEmailError, clearPasswordError } = loginReducer.actions;
export default loginReducer.reducer;
