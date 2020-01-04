const path = require("path");
const express = require("express");

const apiRouter = require("./routes/api");
const authRouter = require("./routes/auth");

const routes = express.Router();

routes.use("/api", apiRouter);
routes.use("/auth", authRouter);

module.exports = routes;
