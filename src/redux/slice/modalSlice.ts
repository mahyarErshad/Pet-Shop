import { createSlice } from "@reduxjs/toolkit";

interface modal {
  isOpen: boolean;
  message: string;
}

const initialState: modal = {
  isOpen: false,
  message: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    changeModalState: (state, action) => {
      state.isOpen = !state.isOpen;
      state.message = action.payload;
    },
  },
});
export const { changeModalState } = modalSlice.actions;
export default modalSlice.reducer;
