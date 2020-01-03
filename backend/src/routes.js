const path = require("path");
const express = require("express");

const apiRouter = require("./routes/api");
const authRouter = require("./routes/auth");

const routes = express.Router();

routes.use("/api", apiRouter);
routes.use("/auth", authRouter);

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
