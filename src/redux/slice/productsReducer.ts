import { createSlice } from "@reduxjs/toolkit";

interface ProductsState {
  products: any[];
  filteredProducts: any[];
  filteredByCountry: any[];
  filteredByBrand: any[];
  filteredByPrice: any[];
  filteredByName: any[];
  filteredNotFound: boolean;
  isFiltered: boolean;
}

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  filteredByCountry: [],
  filteredByBrand: [],
  filteredByPrice: [],
  filteredByName: [],
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
    setFilteredProducts: (state) => {
      state.filteredProducts = [...state.filteredByBrand, ...state.filteredByCountry, ...state.filteredByPrice, ...state.filteredByName];
      if (state.filteredProducts.length === 0) {
        state.filteredNotFound = true;
      } else {
        state.filteredNotFound = false;
      }
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
      if (action.payload === "") {
        state.filteredByName = [];
        state.isFiltered = false;
      } else {
        state.filteredByName = state.products.filter((product) => product.name.toLowerCase().includes(action.payload.toLowerCase()));
        state.isFiltered = true;
      }
    },
    filterByCountry: (state, action) => {
      state.filteredProducts = state.products.filter((product) => product.country === action.payload);
      if (state.filteredProducts.length === 0) {
        state.filteredNotFound = true;
      } else {
        state.filteredNotFound = false;
      }
      state.isFiltered = true;
    },
    resetFilter: (state) => {
      state.products = [];
      state.filteredNotFound = false;
      state.isFiltered = false;
    },
  },
});

export const { setProducts, setFilteredProducts, filterByBrand, filterByMinPrice, filterByMaxPrice, filterByName, filterByCountry, resetFilter } = productsReducer.actions;

export default productsReducer.reducer;
