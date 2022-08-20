import { createSlice } from "@reduxjs/toolkit";

interface ProductsState {
  products: any[];
  isAny: boolean;
  isFiltered: boolean;
}

const initialState: ProductsState = {
  products: [],
  isAny: false,
  isFiltered: false,
};

const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {},
});
export default productsReducer.reducer;
