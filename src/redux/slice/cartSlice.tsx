import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cartItems: [],
    total: 0,
    amount: 0,
    isLoading: false,
}

export default const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {}
})