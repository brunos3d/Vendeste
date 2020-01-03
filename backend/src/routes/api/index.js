const express = require("express");

const { projects } = require("../../controllers/project");
const { products } = require("../../controllers/product");
const { authMiddleware } = require("../../middlewares/auth");

const apiRouter = express.Router();

apiRouter.use(authMiddleware);

apiRouter.get("/projects", projects);
apiRouter.get("/products", products);

module.exports = apiRouter;
