import { createSlice } from "@reduxjs/toolkit";

interface ProductsState {
  products: any[];
  filteredProducts: any[];
  filteredNotFound: boolean;
  isFiltered: boolean;
}

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  filteredNotFound: false,
  isFiltered: false,
};

const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    filterByBrand: (state, action) => {
      state.filteredProducts = state.products.filter((product) => product.brand === action.payload);
      if (state.filteredProducts.length === 0) {
        state.filteredNotFound = true;
      } else {
        state.filteredNotFound = false;
      }
      state.isFiltered = true;
    },
    filterByMinPrice: (state) => {
      state.filteredProducts = state.products.filter((product) => product.price >= state.filteredProducts[0].price);
      if (state.filteredProducts.length === 0) {
        state.filteredNotFound = true;
      } else {
        state.filteredNotFound = false;
      }
      state.isFiltered = true;
    },
    filterByMaxPrice: (state) => {
      state.filteredProducts = state.products.filter((product) => product.price <= state.filteredProducts[0].price);
      if (state.filteredProducts.length === 0) {
        state.filteredNotFound = true;
      } else {
        state.filteredNotFound = false;
      }
      state.isFiltered = true;
    },
    filterByName: (state, action) => {
      state.filteredProducts = state.products.filter((product) => product.name === action.payload);
      if (state.filteredProducts.length === 0) {
        state.filteredNotFound = true;
      } else {
        state.filteredNotFound = false;
      }
      state.isFiltered = true;
    },
    filterByCountry: (state, action) => {
      state.products = state.products.filter((product) => product.country === action.payload);
      state.isFiltered = true;
      if (state.products.length === 0) {
        state.filteredNotFound = true;
      }
    },
    resetFilter: (state) => {
      state.products = [];
      state.filteredNotFound = false;
      state.isFiltered = false;
    },
  },
});

export const { setProducts, filterByBrand, filterByMinPrice, filterByMaxPrice, filterByName, filterByCountry, resetFilter } = productsReducer.actions;

export default productsReducer.reducer;
