const express = require("express");

const appRouter = require("./app");
const apiRouter = require("./api");

const routes = express.Router();

routes.use(appRouter);
routes.use("/api", apiRouter);

module.exports = routes;
