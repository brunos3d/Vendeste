const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
    return req.nextapp.render(req, res, "/");
});

router.get("/user", async (req, res) => {
    if (req.session.userId) {
        return req.nextapp.render(req, res, "/user");
    } else {
        return res.redirect("/login");
    }
});

router.get("/login", (req, res) => {
    if (req.session.userId) {
        return res.redirect("/");
    }
    return req.nextapp.render(req, res, "/login");
});

router.get("/register", (req, res) => {
    if (req.session.userId) {
        return res.redirect("/");
    }
    return req.nextapp.render(req, res, "/register");
});

module.exports = router;
