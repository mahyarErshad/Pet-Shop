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
    setLoggedOut: (state) => {
      state.loggedIn = false;
      state.userEmail = "";
      state.emailValue = "";
      state.passwordValue = "";
    },
    setEmailError: (state) => {
      if (!state.emailValue) {
        state.emailError = true;
        state.emailErrorMessage = "ایمیل خود را وارد نمایید";
      } else if (state.emailValue && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(state.emailValue)) {
        state.emailError = true;
        state.emailErrorMessage = "ایمیل وارد شده معتبر نیست";
      } else {
        state.emailError = false;
        state.emailErrorMessage = "";
      }
    },
    setPasswordError: (state) => {
      if (!state.passwordValue) {
        state.passwordError = true;
        state.passwordErrorMessage = "رمز عبور خود را وارد نمایید";
      } else if (state.passwordValue && state.passwordValue.length < 8) {
        state.passwordError = true;
        state.passwordErrorMessage = "رمز عبور باید حداقل ۸ کاراکتر باشد";
      } else {
        state.passwordError = false;
        state.passwordErrorMessage = "";
      }
    },
    setEmailValue: (state, action) => {
      state.emailValue = action.payload;
    },
    setPasswordValue: (state, action) => {
      state.passwordValue = action.payload;
    },
    submit: (state) => {
      if (state.emailError || state.passwordError) {
        return;
      }
      if (!state.emailError && !state.passwordError) {
        state.loggedIn = true;
        state.userEmail = state.emailValue;
      }
    },
    clearErrors: (state) => {
      state.emailError = false;
      state.passwordError = false;
      state.emailErrorMessage = "";
      state.passwordErrorMessage = "";
      state.passwordValue = "";
      state.emailValue = "";
    },
  },
});

export const { setLoggedOut, setEmailError, setPasswordError, setEmailValue, setPasswordValue, submit, clearErrors } = loginReducer.actions;
export default loginReducer.reducer;
