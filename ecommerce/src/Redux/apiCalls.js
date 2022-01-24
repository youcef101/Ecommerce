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
import {
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
} from './productSlice'

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

//get latest category
export const getLatestCategory = async (dispatch) => {
    dispatch(getLatestCategoryStart())
    try {
        const res = await axiosInstance.get(`/category/get/?new=true`);
        const data = await res.data
        dispatch(getLatestCategorySuccess(data))
    } catch (err) {
        dispatch(getLatestCategoryFailure())
    }
}

//get random product
export const getRandomProduct = async (dispatch) => {
    dispatch(getRandomProductStart())
    try {
        const res = await axiosInstance.get(`/product/random/all/d`)
        const data = await res.data
        dispatch(getRandomProductSuccess(data))
    } catch (err) {
        dispatch(getRandomProductFailure())
    }
}

//get latest product
export const getLatestProduct = async (dispatch) => {
    dispatch(getLatestProductStart())
    try {
        const res = await axiosInstance.get(`/product/get/latest/?new=true`)
        const data = await res.data
        dispatch(getLatestProductSuccess(data))
    } catch (err) {
        dispatch(getLatestProductFailure())
    }
}

//get all products
/* export const getAllProducts = async (dispatch) => {
    dispatch(getAllProductsStart())
    try {
        const res = await axiosInstance.get(`/product/get/latest/?new=true`)
        const data = await res.data
        dispatch(getAllProductsSuccess(data))
    } catch (err) {
        dispatch(getAllProductsFailure())
    }
} */