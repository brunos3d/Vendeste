import axios from "axios";

const baseURL = (process.env.NODE_ENV || "return").includes("development")
    ? "http://localhost:3333"
    : "https://vendeste.herokuapp.com";

const config = {
    withCredentials: true,
    baseURL: baseURL + "/api"
};

if (process.browser) {
    config.headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    };
}

const api = axios.create(config);

export default api;
