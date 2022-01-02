import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    suggestions: null, //suggested products

}
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        FilterStart: (state, action) => {
            state.suggestions = action.payload
        },
        FilterProducts: (state, action) => {
            state.suggestions = action.payload
        }
    }
})

export const { FilterStart, FilterProducts } = searchSlice.actions
export default searchSlice.reducer