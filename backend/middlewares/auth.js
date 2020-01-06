const jwt = require("jsonwebtoken");

module.exports = {
    async tryAuthMiddleware(req, res, next) {
        if (req.userId) {
            return next();
        }
        const token = req.session.token;

        if (token) {
            jwt.verify(token, process.env.APP_SECRET, (error, decoded) => {
                if (!error) {
                    req.userId = decoded.id;
                }
                return next();
            });
        } else {
            return next();
        }
    },
    async apiAuthMiddleware(req, res, next) {
        if (req.userId) {
            return next();
        }
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
    async appAuthMiddleware(req, res, next) {
        if (req.userId) {
            return next();
        }
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
