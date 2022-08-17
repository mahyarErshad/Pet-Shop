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
    },
    setEmailError: (state) => {
      if (!state.emailValue) {
        state.emailError = true;
        state.emailErrorMessage = "ایمیل خود را وارد نمایید";
      }
      if (state.emailValue && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(state.emailValue)) {
        state.emailError = true;
        state.emailErrorMessage = "ایمیل وارد شده معتبر نیست";
      }
    },
    setPasswordError: (state) => {
      if (!state.passwordValue) {
        state.passwordError = true;
        state.passwordErrorMessage = "رمز عبور خود را وارد نمایید";
      }
      if (state.passwordValue && state.passwordValue.length < 8) {
        state.passwordError = true;
        state.passwordErrorMessage = "رمز عبور باید حداقل ۸ کاراکتر باشد";
      }
    },
    setEmailValue: (state, action) => {
      state.emailErrorMessage = "";
      state.emailError = false;
      state.emailValue = action.payload;
    },
    setPasswordValue: (state, action) => {
      state.passwordErrorMessage = "";
      state.passwordError = false;
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
  },
});

export const { setLoggedOut, setEmailError, setPasswordError, setEmailValue, setPasswordValue, submit } = loginReducer.actions;
export default loginReducer.reducer;
