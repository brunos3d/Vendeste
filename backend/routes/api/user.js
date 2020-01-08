const express = require("express");

const userController = require("../../controllers/user");
const authCheckerMiddleware = require("../../middlewares/authChecker");

const router = express.Router();

router.use(authCheckerMiddleware);

router.get("/", userController.index);

module.exports = router;
