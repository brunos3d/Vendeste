const express = require("express");

const authRouter = require("./auth");
const userRouter = require("../controllers/user");
const { apiAuthMiddleware } = require("../middlewares/auth");

const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", apiAuthMiddleware, userRouter);

module.exports = router;
