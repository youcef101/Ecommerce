import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    users: [],
    current_user: JSON.parse(JSON.parse(localStorage.getItem('persist:root')).admin).current_user || null,
    errors: false,
    isFetching: false,
}
const adminSlice = createSlice({
    name: 'admin',
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
        },
        LOGOUT: (state) => {
            state.errors = true;
            state.isFetching = false;
            state.current_user = null
        },
        getAllUsersStart: (state) => {
            state.isFetching = true;
            state.errors = false
        },
        getAllUsersSuccess: (state, action) => {
            state.isFetching = false;
            state.errors = false;
            state.users = action.payload
        },
        getAllUsersFailure: (state) => {
            state.isFetching = false;
            state.errors = true
        },
        updateUserStart: (state) => {
            state.isFetching = true;
            state.errors = false
        },
        updateUserSuccess: (state, action) => {
            state.isFetching = false;
            state.errors = false;
            state.users[
                state.users.findIndex((item) => item._id === action.payload.id)
            ] = action.payload.admin;
        },
        updateUserFailure: (state) => {
            state.isFetching = false;
            state.errors = true
        },
        deleteUserStart: (state) => {
            state.isFetching = true;
            state.errors = false
        },
        deleteUserSuccess: (state, action) => {
            state.isFetching = false;
            state.errors = false;
            state.users.splice(state.users.findIndex(item => item._id === action.payload), 1)
        },
        deleteUserFailure: (state) => {
            state.isFetching = false;
            state.errors = true;
        },

    }
})
export const {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    getAllUsersFailure,
    getAllUsersStart,
    getAllUsersSuccess,
    updateUserFailure,
    updateUserStart,
    updateUserSuccess,
    deleteUserFailure,
    deleteUserStart,
    deleteUserSuccess,

} = adminSlice.actions
export default adminSlice.reducer