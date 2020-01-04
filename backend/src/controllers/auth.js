const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserModel = require("../models/user");

function generateToken(params = {}) {
    return jwt.sign(params, process.env.APP_SECRET, {
        expiresIn: 86400
    });
}

module.exports = {
    async register(req, res) {
        const { email } = req.body;
        try {
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

        res.send({ user, token: generateToken({ id: user.id }) });
    }
};
