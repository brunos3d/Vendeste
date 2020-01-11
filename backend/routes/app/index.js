const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
    if (req.isAuth) {
        return req.nextapp.render(req, res, "/home");
    } else {
        return req.nextapp.render(req, res, "/noauthhome");
    }
});

router.get("/noauthhome", async (req, res) => {
    return res.redirect("/");
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
        // return res.redirect("/");
        return res.redirect("/user");
    }
    return req.nextapp.render(req, res, "/login");
});

router.get("/register", (req, res) => {
    if (req.session.userId) {
        // return res.redirect("/");
        return res.redirect("/user");
    }
    return req.nextapp.render(req, res, "/register");
});

module.exports = router;
