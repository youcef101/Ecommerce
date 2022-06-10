import axios from 'axios'
const baseURL = 'https://e-shop-mern-clone.herokuapp.com/api'//https://e-shop-mern-clone.herokuapp.com/
const TOKEN = '' /* JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).current_user.accessToken */
export const axiosInstance = axios.create({
    baseURL: baseURL
})

export const userRequest = axios.create({
    baseURL: baseURL,
    headers: { authorization: `Bearer ${TOKEN}` }
})
