const express = require("express");

const { authMiddleware } = require("../middlewares/auth");

const router = express.Router();

router.use(authMiddleware);

router.get("/sells", async (req, res) => {
    return res.send([{ product: 1, price: 9.99 }]);
});

module.exports = router;
