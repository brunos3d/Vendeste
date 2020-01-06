const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    return req.nextapp.render(req, res, "/", { username: "Test" });
});

router.get("/login", (req, res) => {
    return req.nextapp.render(req, res, "/login");
});

module.exports = router;
