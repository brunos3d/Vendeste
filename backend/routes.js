const express = require("express");

const appRouter = require("./routes/app");
const apiRouter = require("./routes/api");
const { authApiMiddleware, authAppMiddleware } = require("./middlewares/auth");

const routes = express.Router();

// routes.use("/app", appRouter);
routes.use(authAppMiddleware, appRouter);
routes.use("/api", authApiMiddleware, apiRouter);

module.exports = routes;
