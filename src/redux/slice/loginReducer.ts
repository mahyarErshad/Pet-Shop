import { createSlice } from "@reduxjs/toolkit";
const initialState = {
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

export default loginReducer.reducer;
