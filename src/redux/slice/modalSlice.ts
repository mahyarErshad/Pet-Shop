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
  reducers: {
    changeModalState: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});
export const { changeModalState } = modalSlice.actions;
export default modalSlice.reducer;
