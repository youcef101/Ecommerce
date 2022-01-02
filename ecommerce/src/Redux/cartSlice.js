import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    products: [],
    quantity: 0,
    total: 0
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        AddCart: (state, action) => {
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
            state.products.push(action.payload)
        }
    }
})
export const { AddCart } = cartSlice.actions
export default cartSlice.reducer