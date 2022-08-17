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
  },
});

export default loginReducer.reducer;
