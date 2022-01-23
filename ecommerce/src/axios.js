import axios from 'axios'
const baseURL = 'http://localhost:8001/api'
const TOKEN = '' /* JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).current_user.accessToken */
export const axiosInstance = axios.create({
    baseURL: baseURL
})

export const userRequest = axios.create({
    baseURL: baseURL,
    headers: { authorization: `Bearer ${TOKEN}` }
})
