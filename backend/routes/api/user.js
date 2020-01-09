const express = require("express");

const UserController = require("../../controllers/user");
const authCheckerMiddleware = require("../../middlewares/authChecker");

const router = express.Router();

router.use(authCheckerMiddleware);

router.get("/", UserController.index);

module.exports = router;
