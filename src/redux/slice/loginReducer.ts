import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loggedIn: false,
  userEmail: "",
};

const loginReducer = createSlice({
  name: "login",
  initialState,
  reducers: {},
});

export default loginReducer.reducer;
