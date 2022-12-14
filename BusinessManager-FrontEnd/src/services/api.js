import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});

api.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

api.interceptors.response.use(function (response) {
    console.log(response)
    return response
}, function (error) {
    console.log(error)
    return Promise.reject(error);
})

const auth = localStorage.getItem('auth')
const token = auth ? JSON.parse(auth)?.access_token : ''
api.defaults.headers.common.authorization = `Bearer ${token}`

export default api;