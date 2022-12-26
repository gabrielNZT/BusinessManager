import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});

api.interceptors.request.use(function (config) {
    const auth = localStorage.getItem('auth')
    const token = auth ? JSON.parse(auth)?.access_token : ''
    config.headers.Authorization =  token;
    return config;
});

export default api;