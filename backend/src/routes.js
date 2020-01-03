const express = require("express");

const routes = express.Router();

routes.get("/products", (req, res) => {
    const products = ["Maçã", "Banana", "Abacaxi", "Goiaba", "Limão"];
    return res.send(products);
});

module.exports = routes;
