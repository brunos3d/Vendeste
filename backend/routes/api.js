const express = require("express");

const { projects } = require("../controllers/project");
const { products } = require("../controllers/product");
const { authMiddleware } = require("../middlewares/auth");

const router = express.Router();

router.get("/products", products);
router.get("/projects", authMiddleware, projects);

module.exports = router;
