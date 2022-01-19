import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: [],
    categories: [],
    current_category: null,
    current_product: null,
    errors: false,
    isFetching: false
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getAllProductsStart: (state) => {
            state.isFetching = true;
            state.errors = false;
            state.products = null
        },
        getAllProductsSuccess: (state, action) => {
            state.isFetching = false;
            state.products = action.payload;
            state.errors = false;
        },
        getAllProductsFailure: (state) => {
            state.isFetching = false;
            state.errors = true;
            state.products = null
        },
        deleteProductStart: (state) => {
            state.isFetching = true;
            state.errors = false;
        },
        deleteProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.splice(state.products.findIndex(item => item._id === action.payload), 1)
        },
        deleteProductFailure: (state) => {
            state.isFetching = false;
            state.errors = true
        },
        updateProductStart: (state) => {
            state.isFetching = true;
            state.errors = false
        },
        updateProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products[
                state.products.findIndex((item) => item._id === action.payload.id)
            ] = action.payload.product;
        },
        updateProductFailure: (state) => {
            state.isFetching = false;
            state.errors = true
        },
        addProductStart: (state) => {
            state.isFetching = true;
            state.errors = false;
        },
        addProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.push(action.payload);
        },
        addProductFailure: (state) => {
            state.isFetching = false;
            state.errors = true;
        },
        getAllCategoriesStart: (state) => {
            state.isFetching = true;
            state.errors = false
        },
        getAllCategoriesSuccess: (state, action) => {
            state.isFetching = false;
            state.categories = action.payload
        },
        getAllCategoriesFailure: (state) => {
            state.isFetching = false;
            state.errors = true
        },
        deleteCategoriesStart: (state) => {
            state.isFetching = true;
            state.errors = false
        },
        deleteCategoriesSuccess: (state, action) => {
            state.categories.splice(state.categories.findIndex(item => item._id === action.payload), 1)
        },
        deleteCategoriesFailure: (state) => {
            state.isFetching = false;
            state.errors = true
        },
        updateCategoriesStart: (state) => {
            state.isFetching = true;
            state.errors = false
        },
        updateCategoriesSuccess: (state, action) => {
            state.isFetching = false;
            state.categories[
                state.categories.findIndex((item) => item._id === action.payload.id)
            ] = action.payload.product;
        },
        updateCategoriesFailure: (state) => {
            state.isFetching = false;
            state.errors = true
        },
        addCategoryStart: (state) => {
            state.isFetching = true;
            state.errors = false;
        },
        addCategorySuccess: (state, action) => {
            state.isFetching = false;
            state.categories.push(action.payload);
        },
        addCategoryFailure: (state) => {
            state.isFetching = false;
            state.errors = true;
        },
        getCurrentCategoryStart: (state) => {
            state.isFetching = true;
            state.errors = false;
        },
        getCurrentCategorySuccess: (state, action) => {
            state.isFetching = false;
            state.current_category = action.payload
        },
        getCurrentCategoryFailure: (state) => {
            state.isFetching = false;
            state.errors = true;
        },
        getCurrentProductStart: (state) => {
            state.isFetching = true;
            state.errors = false;
            state.current_product = null
        },
        getCurrentProductSuccess: (state, action) => {
            state.isFetching = false;
            state.current_product = action.payload
        },
        getCurrentProductFailure: (state) => {
            state.isFetching = false;
            state.errors = true;
            state.current_product = null
        },
        deleteProductColorStart: (state) => {
            state.isFetching = true;
            state.errors = false
        },
        deleteProductColorSuccess: (state, action) => {
            state.products.color.splice(state.products.color.findIndex(item => item === action.payload), 1)
        },
        deleteProductColorFailure: (state) => {
            state.isFetching = false;
            state.errors = true
        },
    }
})
export const {
    getAllProductsStart,
    getAllProductsSuccess,
    getAllProductsFailure,
    deleteProductStart,
    deleteProductSuccess,
    deleteProductFailure,
    updateProductStart,
    updateProductSuccess,
    updateProductFailure,
    getAllCategoriesStart,
    getAllCategoriesSuccess,
    getAllCategoriesFailure,
    deleteCategoriesStart,
    deleteCategoriesSuccess,
    deleteCategoriesFailure,
    updateCategoriesStart,
    updateCategoriesSuccess,
    updateCategoriesFailure,
    addCategoryFailure,
    addCategoryStart,
    addCategorySuccess,
    addProductFailure,
    addProductStart,
    addProductSuccess,
    getCurrentCategoryFailure,
    getCurrentCategorySuccess,
    getCurrentCategoryStart,
    getCurrentProductFailure,
    getCurrentProductStart,
    getCurrentProductSuccess,
    deleteProductColorFailure,
    deleteProductColorStart,
    deleteProductColorSuccess
} = productSlice.actions
export default productSlice.reducer