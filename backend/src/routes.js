const path = require("path");
const express = require("express");

const routes = express.Router();

const authMiddleware = require("./middlewares/auth");
const { projects } = require("./controllers/projectController");
const { products } = require("./controllers/productController");
const { register, authenticate } = require("./controllers/authController");

routes.post("/auth/register", register);
routes.post("/auth/authenticate", authenticate);

routes.use(authMiddleware);

routes.get("/projects", projects);
routes.get("/products", products);

routes.use(express.static(path.join(__dirname, "../../frontend/build")));

routes.get(["/", "/index", "/home", "/index.html"], (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/build/index.html"));
});

routes.get("*", (req, res) => {
    res.status(404).send({ error: "ERRO 404 :[" });
});

module.exports = routes;
