const path = require("path");
const express = require("express");

const routes = express.Router();

routes.use(express.static(path.join(__dirname, "../../frontend/build")));

routes.get(["/", "/index", "/home", "/index.html"], (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/build/index.html"));
});

routes.get("/products", (req, res) => {
    const products = ["Maçã", "Banana", "Abacaxi", "Goiaba", "Limão"];
    return res.send(products);
});

routes.get("*", (req, res) => {
    res.status(404).send("ERRO :[");
});

module.exports = routes;
