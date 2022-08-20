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
  isFilteredByName: boolean;
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
  isFilteredByName: false,
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
      if (!state.filteredProducts.length) {
        state.filteredNotFound = true;
      } else {
        state.filteredNotFound = false;
      }
      if (state.isFilteredByName) {
        state.isFiltered = true;
      } else {
        state.isFiltered = false;
      }
    },
    filterByName: (state, action) => {
      if (!action.payload.length) {
        state.filteredByName = [];
        state.isFilteredByName = false;
      } else {
        state.filteredByName = action.payload;
        state.isFilteredByName = true;
      }
    },
    RemoveFilterByName: (state) => {
      state.filteredByName = [];
      state.isFilteredByName = false;
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
      state.filteredProducts = [];
      state.filteredByCountry = [];
      state.filteredByBrand = [];
      state.filteredByPrice = [];
      state.filteredByName = [];
      state.filteredNotFound = false;
      state.isFiltered = false;
      state.isFilteredByName = false;
    },
  },
});

export const { setProducts, setFilteredProducts, filterByBrand, filterByMinPrice, filterByMaxPrice, filterByName, RemoveFilterByName, filterByCountry, resetFilter } = productsReducer.actions;

export default productsReducer.reducer;
