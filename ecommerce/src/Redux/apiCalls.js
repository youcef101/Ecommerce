import axiosInstance from "../axios"
import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS } from "./userSlice"

export const LoginCalls = async (dispatch, user) => {
    dispatch(LOGIN_START())
    try {
        const res = await axiosInstance.post('/auth/login', user);
        dispatch(LOGIN_SUCCESS(res.data))
    } catch (err) {
        dispatch(LOGIN_FAILURE())
    }

}