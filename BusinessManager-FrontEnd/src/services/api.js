import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});

// const auth = localStorage.getItem('auth')
// const token = auth ? JSON.parse(auth)?.access_token : null
// api.defaults.headers.common.authorization = `Bearer ${token}`

export default api;