const express = require("express");

const UserController = require("../../controllers/user");
const WishlistController = require("../../controllers/wishlist");
const authCheckerMiddleware = require("../../middlewares/authChecker");

const router = express.Router();

router.use(authCheckerMiddleware);

router.get("/", UserController.index);

router.get("/wishlist/index", WishlistController.index);
router.post("/wishlist/store", WishlistController.store);

module.exports = router;
