interface ProductsState {
  products: Product[];
  isAny: boolean;
  isFiltered: boolean;
}

const initialState = <ProductsState>{
  products: [],
  isAny: false,
  isFiltered: false,
};
