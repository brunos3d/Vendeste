const express = require("express");

const { projects } = require("../controllers/project");
const { products } = require("../controllers/product");
// const { authMiddleware } = require("../middlewares/auth");

const router = express.Router();

// router.use(authMiddleware);

router.get("/projects", projects);
router.get("/products", products);

module.exports = router;
