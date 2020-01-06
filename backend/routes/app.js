const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    return req.nextapp.render(req, res, "/", { username: req.userId });
});

router.get("/login", (req, res) => {
    if (req.userId) {
        return res.redirect("/");
    }
    return req.nextapp.render(req, res, "/login");
});

router.get("/register", (req, res) => {
    if (req.userId) {
        return res.redirect("/");
    }
    return req.nextapp.render(req, res, "/register");
});

module.exports = router;
