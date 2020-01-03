import axios from "axios";

const api = axios.create({
    baseURL: process.env.NODE_ENV === "development" ? "http://localhost:3333" : "https://vendeste.herokuapp.com"
});

export default api;
