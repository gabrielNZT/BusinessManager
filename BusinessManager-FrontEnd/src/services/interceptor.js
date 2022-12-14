import axios from "axios";

const instance = axios.create();
instance.interceptors.request.use(function () {
    console.log("interceptor")
});