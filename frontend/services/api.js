import axios from "axios";

const development_mode = (process.env.NODE_ENV || "return").includes("development");

const baseURL = development_mode ? "http://localhost:3333" : "https://vendeste.herokuapp.com";

const config = {
    baseURL: baseURL + "/api",
    withCredentials: true,
    headers: { crossDomain: true }
};
axios.defaults.withCredentials = true;

const api = axios.create(config);

export default api;
