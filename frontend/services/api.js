import axios from "axios";

const baseURL = (process.env.NODE_ENV || "return").includes("development")
    ? "http://localhost:3333"
    : "https://vendeste.herokuapp.com";

const config = {
    baseURL: baseURL + "/api",
    withCredentials: true
};

const api = axios.create(config);

export default api;
