const express = require("express");

const AuthControler = require("../../controllers/auth");

const router = express.Router();

router.post("/register", AuthControler.register);
router.post("/authenticate", AuthControler.authenticate);

module.exports = router;
