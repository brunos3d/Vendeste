const express = require("express");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const UserModel = require("../../models/user");

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const { email, name, username } = req.body;

        if (!validator.isEmail(email)) {
            return res.status(400).send({ error: "Use um endereço de email válido!" });
        }

        if (!validator.isAlpha(name)) {
            return res.status(400).send({ error: "O nome deve conter apenas letras!" });
        }

        if (!validator.isAlphanumeric(username)) {
            return res.status(400).send({ error: "O nome de usuário deve conter apenas caracteres alfanuméricos!" });
        }

        if (await UserModel.findOne({ email })) {
            return res.status(400).send({ error: "Este email já está cadastrado!" });
        }

        const user = await UserModel.create(req.body);

        user.password = undefined;

        req.session.userId = user.id;
        req.session.save(error => {
            if (!error) {
                return res.send({ success: true });
            }
        });
    } catch (error) {
        return res.status(400).send({ error: "Falha ao registrar usuário!" });
    }
});

router.post("/authenticate", async (req, res) => {
    try {
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
            if (!error) {
                return res.send({ success: true });
            }
        });
    } catch (error) {
        return res.status(400).send({ error: "Falha ao autenticar usuário!" });
    }
});

module.exports = router;
