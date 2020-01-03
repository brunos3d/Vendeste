const express = require("express");

const { register, authenticate } = require("../../controllers/auth");

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/authenticate", authenticate);

module.exports = authRouter;
