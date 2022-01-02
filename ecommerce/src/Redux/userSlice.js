import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    current_user: null,
    errors: false,
    isFetching: false
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        LOGIN_START: (state) => {
            state.errors = false;
            state.isFetching = true;

        },
        LOGIN_SUCCESS: (state, action) => {
            state.current_user = action.payload;
            state.errors = false;
            state.isFetching = false;
        },
        LOGIN_FAILURE: (state) => {
            state.errors = true;
            state.isFetching = false;
        }
    }
})
export const { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } = userSlice.actions
export default userSlice.reducer