import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    products: [],
    quantity: 0,
    total: 0,
    isFetching: false,
    errors: false
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        AddCart: (state, action) => {
            /*   state.products.filter(product => {
                  if (product._id === action.payload._id) {
                      product.quantity += 1;
                  } else {
                      state.products.push(action.payload)
                  }
              }) */
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
            state.products.push(action.payload)
        },
        deleteCartProductStart: (state) => {
            state.isFetching = true;
            state.errors = false
        },
        deleteCartProductSuccess: (state, action) => {
            state.isFetching = false;
            state.errors = false;
            state.products.splice(state.products.findIndex(item => item._id === action.payload), 1)
            state.quantity -= 1
        },
        deleteCartProductFailure: (state) => {
            state.isFetching = false;
            state.errors = true
        }
    }
})
export const {
    AddCart,
    deleteCartProductFailure,
    deleteCartProductStart,
    deleteCartProductSuccess
} = cartSlice.actions
export default cartSlice.reducer