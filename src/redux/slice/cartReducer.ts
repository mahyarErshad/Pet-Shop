import { createSlice } from "@reduxjs/toolkit";

interface cartState {
  cartItems: any[];
  total: number;
  quantity: number;
  discountCode: any[];
  phrase: string;
  hasDiscount: boolean;
}

const initialState: cartState = {
  cartItems: [],
  total: 0,
  quantity: 0,
  discountCode: [
    {
      name: "phoenix10",
      discount: 0.1,
      message: "تخفیف ۱۰ درصدی با موفقیت اعمال شد",
    },
    {
      name: "phoenix20",
      discount: 0.2,
      message: "تخفیف ۲۰ درصدی با موفقیت اعمال شد",
    },
  ],
  phrase: "",
  hasDiscount: false,
};

const cartReducer: any = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    increaseAmount: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decreaseAmount: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    calculateTotal: (state) => {
      let quantity = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        quantity = quantity + item.amount;
        total = total + item.price * item.amount;
      });
      state.quantity = quantity;
      state.total = total;
    },
    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.amount++;
      } else {
        state.cartItems.push({ ...action.payload, amount: 1 });
      }
    },
    setPhrase: (state, action) => {
      state.phrase = action.payload;
    },
    setHasDiscount: (state, action) => {
      state.hasDiscount = action.payload;
    },
    setDiscountInactive: (state) => {
      state.hasDiscount = false;
      state.phrase = "";
    },
  },
});
export const { clearCart, decreaseAmount, increaseAmount, removeItem, calculateTotal, addToCart, setPhrase, setHasDiscount, setDiscountInactive } = cartReducer.actions;
export default cartReducer.reducer;
