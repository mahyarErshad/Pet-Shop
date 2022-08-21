import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/cartReducer";
import loginReducer from "../slice/loginReducer";
import modalSlice from "../slice/modalSlice";
import productsReducer from "../slice/productsReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalSlice,
    loggedIn: loginReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
