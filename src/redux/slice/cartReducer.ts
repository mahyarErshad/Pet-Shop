import { createSlice } from "@reduxjs/toolkit";

interface cartState {
  cartItems: any[];
  total: number;
  amount: number;
  isLoading: boolean;
}

const initialState: cartState = {
  cartItems: [],
  total: 0,
  amount: 0,
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      state.total += action.payload.price;
      state.amount += 1;
    },
  },
});
export default cartSlice.reducer;
