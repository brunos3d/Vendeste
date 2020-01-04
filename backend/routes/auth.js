const express = require("express");

const { register, authenticate } = require("../controllers/auth");

const router = express.Router();

router.post("/register", register);
router.post("/authenticate", authenticate);

module.exports = router;
