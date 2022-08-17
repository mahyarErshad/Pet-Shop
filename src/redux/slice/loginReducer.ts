import { createSlice } from "@reduxjs/toolkit";

interface IState {
  emailValue: string;
  passwordValue: string;
  loggedIn: boolean;
  userEmail: string;
  emailError: boolean;
  passwordError: boolean;
  emailErrorMessage: string;
  passwordErrorMessage: string;
}

const initialState: IState = {
  emailValue: "",
  passwordValue: "",
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
      if (!state.emailValue) {
        state.emailError = true;
        state.emailErrorMessage = "ایمیل خود را وارد کنید";
      }
      if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(state.emailValue)) {
        state.emailError = true;
        state.emailErrorMessage = "ایمیل وارد شده معتبر نیست";
      }
    },
    setPasswordError: (state, action) => {
      if (!state.passwordValue) {
        state.passwordError = true;
        state.passwordErrorMessage = "رمز عبور خود را وارد کنید";
      }
      if (state.passwordValue.length < 8) {
        state.passwordError = true;
        state.passwordErrorMessage = "رمز عبور باید حداقل 8 کاراکتر باشد";
      }
    },
    setEmailValue: (state, action) => {
      state.emailError = false;
      state.emailValue = action.payload;
    },
    setPasswordValue: (state, action) => {
      state.passwordError = false;
      state.passwordValue = action.payload;
    },
  },
});

export const { setLoggedIn, setLoggedOut, setEmailError, setPasswordError, setEmailValue, setPasswordValue } = loginReducer.actions;
export default loginReducer.reducer;
