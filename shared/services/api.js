import axios from "axios";

const development_mode = (process.env.NODE_ENV || "return").includes("development");
const use_localhost = development_mode || !process.browser;

const baseURL = use_localhost ? `http://localhost:${process.env.PORT || 3333}` : "https://vendeste.herokuapp.com";

const config = {
    withCredentials: true,
    baseURL: baseURL + "/api"
};

export const api = axios.create(config);

// forcar o uso de credenciais
api.defaults.withCredentials = true;

// use isso para chamadas isomorficas client/server
export function APIGet(req, url, config) {
    if (req) {
        return api.get(url, { headers: req.headers, ...config });
    } else {
        return api.get(url, config);
    }
}

// use isso para chamadas isomorficas client/server
export function APIPost(req, url, config) {
    if (req) {
        return api.post(url, { headers: req.headers, ...config });
    } else {
        return api.post(url, config);
    }
}
