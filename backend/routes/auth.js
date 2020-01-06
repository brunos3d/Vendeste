const express = require("express");
const bcrypt = require("bcryptjs");

const UserModel = require("../models/user");

const router = express.Router();

router.post("/register", async (req, res) => {
    // try {
    const { email } = req.body;

    if (await UserModel.findOne({ email })) {
        return res.status(400).send({ error: "Este email já está cadastrado!" });
    }

    const user = await UserModel.create(req.body);

    user.password = undefined;

    req.session.userId = user.id;
    req.session.save(error => {
        if (!error) res.send({ success: true });
    });
    // } catch (error) {
    //     return res.status(400).send({ error: "Falha ao registrar usuário!" });
    // }
});

router.post("/authenticate", async (req, res) => {
    // try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email }).select("+password");

    if (!user) {
        return res.status(400).send({ error: "Usuário não encontrado!" });
    }

    if (!bcrypt.compareSync(password, user.password)) {
        return res.status(400).send({ error: "Senha inválida!" });
    }

    user.password = undefined;

    req.session.userId = user.id;
    req.session.save(error => {
        if (!error) res.send({ success: true });
    });
    // } catch (error) {
    //     return res.status(400).send({ error: "Falha ao autenticar usuário!" });
    // }
});

module.exports = router;
