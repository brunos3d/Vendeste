const express = require("express");

const router = express.Router();

router.get("/sells", async (req, res) => {
    return res.send([{ product: 1, price: 9.99 }]);
});

module.exports = router;
