import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    latest_products: [],
    picked_products: [],
    products: [],
    category_products: [],
    latest_category: [],
    isFetching: false,
    errors: false
}
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getLatestCategoryStart: (state) => {
            state.isFetching = true;
            state.errors = false
        },
        getLatestCategorySuccess: (state, action) => {
            state.isFetching = false;
            state.errors = false;
            state.latest_category = action.payload
        },
        getLatestCategoryFailure: (state) => {
            state.isFetching = false;
            state.errors = true
        },
        getRandomProductStart: (state) => {
            state.isFetching = true;
            state.errors = false
        },
        getRandomProductSuccess: (state, action) => {
            state.isFetching = false;
            state.errors = false;
            state.picked_products = action.payload
        },
        getRandomProductFailure: (state) => {
            state.isFetching = false;
            state.errors = true
        },
        getLatestProductStart: (state) => {
            state.isFetching = true;
            state.errors = false
        },
        getLatestProductSuccess: (state, action) => {
            state.isFetching = false;
            state.errors = false;
            state.latest_products = action.payload
        },
        getLatestProductFailure: (state) => {
            state.isFetching = false;
            state.errors = true
        },
        getAllProductsStart: (state) => {
            state.isFetching = true;
            state.errors = false
        },
        getAllProductsSuccess: (state, action) => {
            state.isFetching = false;
            state.errors = false;
            state.products = action.payload
        },
        getAllProductsFailure: (state) => {
            state.isFetching = false;
            state.errors = true
        }

    }
})
export const {
    getLatestCategoryFailure,
    getLatestCategoryStart,
    getLatestCategorySuccess,
    getRandomProductFailure,
    getRandomProductStart,
    getRandomProductSuccess,
    getLatestProductFailure,
    getLatestProductStart,
    getLatestProductSuccess,
    getAllProductsFailure,
    getAllProductsStart,
    getAllProductsSuccess
} = productSlice.actions
export default productSlice.reducer