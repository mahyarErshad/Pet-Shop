import { createSlice } from "@reduxjs/toolkit";

interface cartState {
  cartItems: any[];
  total: number;
  amount: number;
  isLoading: boolean;
}

const initialState: cartState = {
  cartItems: [
    {
      id: 95,
      title: "ژل دندان سگ تریکسی",
      image: "https://rabinseh.com/wp-content/uploads/2022/03/%D8%B2%D9%84-510x510.jpg",
      brand: "تریکسی",
      breed: "سگ",
      country: "آلمان",
      weight: 100,
      description: `
      سلامت دندان و دهان بر سلامت عمومی بدن حیوان بسیار تاثیر گذار است.
  
      این ژل سبب تمیز شدن دندان ها و از بین رفتن جرم ها خواهد شد.
      
      طعم محصول بسیار دلپذیر است و این امر موجب می شود با مقاومت حیوان در برابر استفاده، مواجه نشوید.
      
      روزی یک بار از این ژل به دندان های حیوان زده و به آرامی کمی آن را بمالید.
      
      در صورتی که مقداری از ژل توسط سگ یا گربه شما خورده شد، اصلا نگران نباشید.
      `,
      category: "بهداشتی سگ",
      price: 330000,
    },
    {
      id: 96,
      title: "مسواک دو طرفه ست ۲ عددی",
      image: "https://rabinseh.com/wp-content/uploads/2022/08/%D9%88%DB%8C%DA%98%DA%AF%DB%8C-%D9%85%D8%B3%D9%88%D8%A7%DA%A9-510x510.jpg",
      brand: "متفرقه",
      breed: "سگ",
      country: "چین",
      weight: 30,
      description: `
      مسواک مخصوص سگ
      پک دو عددی
      دارای دو سر جهت مسواک کردن دندان نیش و اسیاب
      `,
      category: "بهداشتی سگ",
      price: 65000,
    },
    {
      id: 97,
      title: "مسواک انگشتی سگ و گربه بکر",
      image: "https://rabinseh.com/wp-content/uploads/2021/09/maya-baby-finger-brush-364353829901-02-510x510.jpg",
      brand: "بکر",
      breed: "سگ",
      country: "ایران",
      weight: 5,
      description: `
      • ابعاد: 6*1 سانتی متر
      • مناسب سگ و گربه
      • دارای مجوز بهداشت
      • مقاوم در برابر گاز گرفتن
      `,
      category: "بهداشتی سگ",
      price: 10000,
    },
  ],
  total: 0,
  amount: 3,
  isLoading: false,
};

const cartReducer = createSlice({
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
  },
});
export const { clearCart, decreaseAmount, increaseAmount } = cartReducer.actions;
export default cartReducer.reducer;
