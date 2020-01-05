const express = require("express");

const appRouter = require("./routes/app");
const apiRouter = require("./routes/api");

const routes = express.Router();

// routes.use("/app", appRouter);
routes.use(appRouter);
routes.use("/api", apiRouter);

module.exports = routes;
