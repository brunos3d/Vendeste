const axios = require("axios");

const development_mode = (process.env.NODE_ENV || "return").includes("development");
const use_localhost = development_mode || !process.browser;

const baseURL = use_localhost ? `http://localhost:${process.env.PORT || 3333}` : "https://vendeste.herokuapp.com";

const config = {
    withCredentials: true,
    baseURL: baseURL + "/api"
};

const api = axios.create(config);

// forcar o uso de credenciais
api.defaults.withCredentials = true;

// use isso para chamadas isomorficas client/server
function APIGet(req, url, config) {
    if (req) {
        return api.get(url, { headers: req.headers, ...config });
    } else {
        return api.get(url, config);
    }
}

// use isso para chamadas isomorficas client/server
function APIPost(req, url, config) {
    if (req) {
        return api.post(url, { headers: req.headers, ...config });
    } else {
        return api.post(url, config);
    }
}

module.exports = {
    api,
    // use isso para chamadas isomorficas client/server
    APIGet,
    // use isso para chamadas isomorficas client/server
    APIPost
};
