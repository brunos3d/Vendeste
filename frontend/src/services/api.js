import axios from "axios";

const baseURL = (process.env.NODE_ENV || "return").includes("development")
    ? "http://localhost:3333"
    : "https://vendeste.herokuapp.com";

const api = axios.create({
    baseURL: baseURL + "/api",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
});

export default api;
