import { axiosInstance, userRequest } from "../axios"
import {
    LOGIN_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGOUT_FAILURE,
    LOGOUT_START,
    LOGOUT_SUCCESS,

} from "./userSlice"
import {
    deleteCartProductFailure,
    deleteCartProductStart,
    deleteCartProductSuccess
} from './cartSlice'

export const LoginCall = async (dispatch, user) => {
    dispatch(LOGIN_START())
    try {
        const res = await axiosInstance.post('/auth/login', user);
        dispatch(LOGIN_SUCCESS(res.data))
    } catch (err) {
        dispatch(LOGIN_FAILURE())
    }

}

export const LogoutCall = async (dispatch) => {
    dispatch(LOGOUT_START())
    try {
        dispatch(LOGOUT_SUCCESS())
    } catch (err) {
        dispatch(LOGOUT_FAILURE())
    }

}

export const DeleteCartProduct = async (id, dispatch) => {
    dispatch(deleteCartProductStart())
    try {
        //await axiosInstance.delete(`/cart/${id}`);
        dispatch(deleteCartProductSuccess(id))
    } catch (err) {
        dispatch(deleteCartProductFailure())
    }
}