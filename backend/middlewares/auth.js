const jwt = require("jsonwebtoken");

module.exports = {
    async authApiMiddleware(req, res, next) {
        const token = req.session.token;

        if (!token) {
            return res.status(401).send({ error: "Erro no token de acesso!" });
        }

        jwt.verify(token, process.env.APP_SECRET, (error, decoded) => {
            if (error) {
                if (error.name === "TokenExpiredError") {
                    return res.status(401).send({ error: "Token expirado!" });
                } else {
                    return res.status(401).send({ error: "Token inválido!" });
                }
            }

            req.userId = decoded.id;

            return next();
        });
    },
    async authAppMiddleware(req, res, next) {
        const token = req.session.token;

        if (!token) {
            return res.redirect("/login");
        }

        jwt.verify(token, process.env.APP_SECRET, (error, decoded) => {
            if (error) {
                return res.redirect("/login");
            }

            req.userId = decoded.id;

            return next();
        });
    }
};
