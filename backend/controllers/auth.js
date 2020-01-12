const bcrypt = require("bcryptjs");
const validator = require("validator");

const UserModel = require("../models/user");

module.exports = {
    async register(req, res) {
        try {
            const { email, password, name, username } = req.body;

            if (
                validator.isEmpty(email) ||
                validator.isEmpty(password) ||
                validator.isEmpty(name) ||
                validator.isEmpty(username)
            ) {
                return res.status(400).send({ error: "A requisição contém campos vazios!" });
            }

            UserModel.findOne({ email }).then(user => {
                if (user) {
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

                // criptografar a senha para garantir que caso eles
                // sejam acessados por qualquer tipo de fonte desconhecida
                // os dados do usuário ainda estejam protegidos
                const hash = bcrypt.hashSync(password, 10);

                UserModel.create({ email, password: hash, name, username }).then(new_user => {
                    new_user.password = undefined;

                    req.session.userId = new_user.id;
                    req.session.save(error => {
                        if (!error) {
                            return res.send({ success: true });
                        }
                    });
                });
            });
        } catch (error) {
            return res.status(400).send({ error: "Falha ao registrar usuário!" });
        }
    },
    async authenticate(req, res) {
        try {
            const { email, password } = req.body;

            UserModel.findOne({ email })
                .select("+password")
                .then(user => {
                    if (!user) {
                        return res.status(400).send({ error: "Usuário não encontrado!" });
                    }

                    bcrypt.compare(password, user.password).then(equals => {
                        if (equals) {
                            user.password = undefined;

                            req.session.userId = user.id;
                            req.session.save(error => {
                                if (!error) {
                                    return res.send({ success: true });
                                }
                            });
                        } else {
                            return res.status(400).send({ error: "Senha inválida!" });
                        }
                    });
                });
        } catch (error) {
            return res.status(400).send({ error: "Falha ao autenticar usuário!" });
        }
    }
};
