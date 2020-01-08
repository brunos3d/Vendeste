const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
    if (req.session.userId) {
        return next();
    } else {
        return res.status(401).send({ error: "O usuário não foi autenticado!" });
    }
});

module.exports = router;
