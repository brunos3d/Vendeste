const path = require("path");
const express = require("express");

const routes = express.Router();

const { projects } = require("./controllers/project");
const { products } = require("./controllers/product");
const { authMiddleware } = require("./middlewares/auth");
const { register, authenticate } = require("./controllers/auth");

routes.post("/auth/register", register);
routes.post("/auth/authenticate", authenticate);

routes.use(authMiddleware);

routes.get("/projects", projects);
routes.get("/products", products);

routes.use(express.static(path.join(__dirname, "../../frontend/build")));

routes.get(["/", "/index", "/home", "/index.html"], (req, res) => {
    if (req.userId) {
        res.sendFile(path.join(__dirname, "../../frontend/build/index.html"));
    }
});

routes.get("*", (req, res) => {
    res.status(404).send({ error: "ERRO 404 :[" });
});

module.exports = routes;
