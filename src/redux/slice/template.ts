import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  template: [],
};
export const filterTemplate = createSlice({
  name: "filterTemplate",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.template = action.payload;
    },
  },
});
export const { setFilter } = filterTemplate.actions;
export default filterTemplate.reducer;
