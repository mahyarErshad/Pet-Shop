import { createSlice } from "@reduxjs/toolkit";

interface ProductsState {
  products: any[];
  filteredProducts: any[];
  filteredNotFound: boolean;
  isFiltered: boolean;
  isFilteredByName: boolean;
  searchTerm: string;
  priceFilterValue: string;
  isFilteredByPrice: boolean;
  brandFilterValue: string;
  isFilteredByBrand: boolean;
  countryFilterValue: string;
  isFilteredByCountry: boolean;
}

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  filteredNotFound: false,
  isFiltered: false,
  isFilteredByName: false,
  searchTerm: "",
  priceFilterValue: "",
  isFilteredByPrice: false,
  brandFilterValue: "",
  isFilteredByBrand: false,
  countryFilterValue: "",
  isFilteredByCountry: false,
};

const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setFilteredProducts: (state, action) => {
      if (state.isFilteredByName) {
        state.filteredProducts = action.payload;
        state.isFiltered = true;
      } else {
        state.filteredProducts = [];
        state.isFiltered = false;
      }
      if (state.isFiltered && !state.filteredProducts.length) {
        state.filteredNotFound = true;
      } else {
        state.filteredNotFound = false;
      }
    },
    filterByName: (state, action) => {
      if (!action.payload.length) {
        state.isFilteredByName = false;
        state.searchTerm = "";
      } else {
        state.isFilteredByName = true;
        state.searchTerm = action.payload;
      }
    },
    resetProducts: (state) => {
      state.products = [];
      state.filteredProducts = [];
      state.filteredNotFound = false;
      state.isFiltered = false;
      state.isFilteredByName = false;
    },
  },
});

export const { setProducts, filterByName, resetProducts, setFilteredProducts } = productsReducer.actions;

export default productsReducer.reducer;
