const express = require("express");

const AuthControler = require("../../controllers/auth");
const UserController = require("../../controllers/user");
const MarketController = require("../../controllers/market");
const ProductController = require("../../controllers/product");
const WishlistController = require("../../controllers/wishlist");
const authCheckerMiddleware = require("../../middlewares/authChecker");

const router = express.Router();

router.post("/auth/register", AuthControler.register);
router.post("/auth/authenticate", AuthControler.authenticate);

router.get("/product/index", ProductController.index);
router.post("/product/create", ProductController.create);

router.get("/market/index", MarketController.index);
router.post("/market/create", MarketController.create);

router.use("/user", authCheckerMiddleware);
router.get("/user", UserController.index);
router.get("/user/wishlist/index", WishlistController.index);
router.post("/user/wishlist/additem", WishlistController.additem);

module.exports = router;
