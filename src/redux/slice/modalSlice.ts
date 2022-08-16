import { createSlice } from "@reduxjs/toolkit";

interface modal {
  isOpen: boolean;
}

const initialState: modal = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {},
});
export default modalSlice.reducer;
