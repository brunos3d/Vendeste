const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserModel = require("../models/user");

const development_mode = (process.env.NODE_ENV || "return").includes("development");

function generateToken(params = {}) {
    return jwt.sign(params, process.env.APP_SECRET, {
        expiresIn: 86400
    });
}

module.exports = {
    async register(req, res) {
        try {
            const { email } = req.body;
            // console.log(req.body);
            if (await UserModel.findOne({ email })) {
                return res.status(400).send({ error: "Este email já está cadastrado!" });
            }
            const user = await UserModel.create(req.body);

            user.password = undefined;

            res.send({ user, token: generateToken({ id: user.id }) });
        } catch (error) {
            return res.status(400).send({ error: "Falha ao registrar usuário!" });
        }
    },
    async authenticate(req, res) {
        try {
            const { email, password } = req.body;

            // console.log(UserModel);

            const user = await UserModel.findOne({ email }).select("+password");

            // console.log(user);

            if (!user) {
                return res.status(400).send({ error: "Usuário não encontrado!" });
            }

            // console.log("password", password);
            // console.log("user.password", user.password);

            if (!bcrypt.compareSync(password, user.password)) {
                return res.status(400).send({ error: "Senha inválida!" });
            }

            user.password = undefined;

            const expires = new Date();
            expires.setDate(expires.getDate() + 7);

            res.cookie("ttx", `Bearer ${generateToken({ id: user.id })}`, {
                expires,
                signed: true,
                httpOnly: true,
                secure: !development_mode
            });
            res.status(200).end();
            // res.redirect("/");
            // res.send({ user, token: generateToken({ id: user.id }) });
        } catch (error) {
            return res.status(400).send({ error: "Falha ao autenticar usuário!" });
        }
    }
};
