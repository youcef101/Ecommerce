import axios from 'axios'
import jwt_decode from 'jwt-decode'
const baseURL = 'http://localhost:8001/api'
const accessToken = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).admin)?.current_user?.accessToken
const refreshToken = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).admin)?.current_user?.refreshToken


export const axiosInstance = axios.create({
    baseURL: baseURL
})

export const adminRequest = axios.create({
    baseURL: baseURL,
    headers: { authorization: `Bearer ${accessToken}` }
})

const RefreshToken = async () => {

    try {
        const res = await axiosInstance.post(`/token/refresh`, { refreshToken: refreshToken });


        return res.data;
    } catch (err) {
        console.log(err)
    }
}
adminRequest.interceptors.request.use(async (config) => {
    let currentDate = new Date()
    let decodedData = jwt_decode(accessToken)
    if (decodedData.exp * 1000 < currentDate.getTime()) {
        const data = await RefreshToken()
        config.headers['authorization'] = 'Bearer ' + data.newAccessToken;
    }
    return config;
}, (err) => {
    return Promise.reject(err)
}); 