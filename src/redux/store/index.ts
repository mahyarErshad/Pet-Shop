import { filterTemplate } from "./../slice/template";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    filterTemplate: filterTemplate.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
