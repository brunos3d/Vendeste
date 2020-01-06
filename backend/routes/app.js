const express = require("express");

const UserModel = require("../models/user");

const router = express.Router();

router.get("/", async (req, res) => {
    if (req.session.userId) {
        const user = await UserModel.findById(req.session.userId);
        if (user) {
            return req.nextapp.render(req, res, "/", {
                username: user.name,
                wishlist: [
                    { product: "touca", price: 29.99 },
                    { product: "sapato", price: 9.99 },
                    { product: "camiseta", price: 19.99 }
                ]
            });
        }
    }
    return req.nextapp.render(req, res, "/");
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
