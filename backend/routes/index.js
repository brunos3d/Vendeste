const express = require("express");

const appRouter = require("./app");
const apiRouter = require("./api");
const { tryAuthMiddleware } = require("../middlewares/auth");

const routes = express.Router();

routes.use(tryAuthMiddleware);

routes.use(appRouter);
routes.use("/api", apiRouter);

module.exports = routes;
