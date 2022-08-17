import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/cartReducer";
import loginReducer from "../slice/loginReducer";
import modalSlice from "../slice/modalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalSlice,
    loggedIn: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
