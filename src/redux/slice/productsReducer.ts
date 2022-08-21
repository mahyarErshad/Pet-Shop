import { createSlice } from "@reduxjs/toolkit";

interface ProductsState {
  products: any[];
  filteredProducts: any[];
  filteredNotFound: boolean;
  isFiltered: boolean;
  isFilteredByName: boolean;
  searchTerm: string;
}

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  filteredNotFound: false,
  isFiltered: false,
  isFilteredByName: false,
  searchTerm: "",
};

const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
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
    RemoveFilterByName: (state) => {
      state.isFilteredByName = false;
      state.searchTerm = "";
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

export const { setProducts, filterByName, RemoveFilterByName, resetProducts } = productsReducer.actions;

export default productsReducer.reducer;
