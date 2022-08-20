interface ProductsState {
  products: Product[];
  isAny: boolean;
}

const initialState = <ProductsState>{
  products: [],
  isAny: false,
};
