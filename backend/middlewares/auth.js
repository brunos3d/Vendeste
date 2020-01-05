const jwt = require("jsonwebtoken");

module.exports = {
    async authMiddleware(req, res, next) {
        const authHeader = req.signedCookies["ttx"];

        if (!authHeader) {
            return req.nextapp.render(req, res, "/login", {
                status: 401,
                error: "O token de acesso não foi informado!"
            });
        }

        const parts = authHeader.split(" ");

        if (!parts.length === 2) {
            return req.nextapp.render(req, res, "/login", {
                status: 401,
                error: "O token informado contém um erro!"
            });
        }

        const [scheme, token] = parts;

        if (!/^Bearer$/i.test(scheme)) {
            return req.nextapp.render(req, res, "/login", {
                status: 401,
                error: "O token informado está em um formato inválido!"
            });
        }

        jwt.verify(token, process.env.APP_SECRET, (error, decoded) => {
            if (error) {
                return req.nextapp.render(req, res, "/login", {
                    status: 401,
                    error: "O token informado está em um formato inválido!"
                });
            }

            req.userId = decoded.id;

            return next();
        });
    }
};
