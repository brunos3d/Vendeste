const express = require("express");

const { api } = require("../../../shared/services/api");

const router = express.Router();

router.get("/", async (req, res) => {
    api.get("/products").then(response => {
        if (req.isAuth) {
            return req.nextapp.render(req, res, "/home", { products: response.data });
        } else {
            return req.nextapp.render(req, res, "/noauthhome", { products: response.data });
        }
    });
});

router.get(["/home", "/noauthhome"], async (req, res) => {
    return res.redirect("/");
});

router.get("/product", async (req, res) => {
    return req.nextapp.render(req, res, "/product", { id: req.query.id });
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
