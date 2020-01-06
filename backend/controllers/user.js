const express = require("express");

const router = express.Router();

router.get("/wishlist", async (req, res) => {
    return res.send([
        { product: "touca", price: 29.99 },
        { product: "sapato", price: 9.99 },
        { product: "camiseta", price: 19.99 }
    ]);
});

module.exports = router;
