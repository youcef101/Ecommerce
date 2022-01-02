import axios from 'axios'
const baseURL = 'http://localhost:8001/api'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzc2NDEyYTJmOTlkNmQzY2ZlN2Q1NCIsImlzQWRtaW4iOnRydWUsImVtYWlsIjoiYmVsa2FkZW15b3Vzc2VmQGdtYWlsLmNvbSIsImlhdCI6MTY0MTA0ODQ5OSwiZXhwIjoxNjQxMTM0ODk5fQ.agz7i4-qpDRQHUszuPfuxBGHg68mybuM-KSLJQ5Hm6Y'
const axiosInstance = axios.create({
    baseURL: baseURL
})

export const userRequest = axios.create({
    baseURL: baseURL,
    headers: { authorization: `Bearer ${TOKEN}` }
})
export default axiosInstance