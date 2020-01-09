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
        try {
            const { email, name, username } = req.body;

            if (validator.isEmpty(email) || validator.isEmpty(name) || validator.isEmpty(username)) {
                return res.status(400).send({ error: "A requisição contém campos vazios!" });
            }

            if (await UserModel.findOne({ email })) {
                return res.status(400).send({ error: "Este email já está cadastrado!" });
            }

            if (!validator.isEmail(email)) {
                return res.status(400).send({ error: "Use um endereço de email válido!" });
            }

            if (!/^[a-zA-Z\s]*$/.test(name)) {
                return res.status(400).send({ error: "O nome deve conter apenas letras!" });
            }

            if (!/^[a-zA-Z0-9]*$/.test(username)) {
                return res
                    .status(400)
                    .send({ error: "O nome de usuário deve conter apenas caracteres alfanuméricos!" });
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
    },
    async authenticate(req, res) {
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
    }
};
