// const cookieParser = require("cookie-parser");
const next = require("next");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const routes = require("./backend/routes");

const development_mode = (process.env.NODE_ENV || "return").includes("development");

if (development_mode) {
    dotenv.config({ path: ".env.development.local" });
    console.warn("=== MODO DE DESENVOLVIMENTO ATIVO! ===");
}

const PORT = process.env.PORT;

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

const DB_URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0-culqu.mongodb.net/${DB_USERNAME}?retryWrites=true&w=majority`;

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const nextapp = next({ dev: development_mode });
const handle = nextapp.getRequestHandler();

nextapp.prepare().then(() => {
    const server = express();

    server.disable("x-powered-by");

    server.use(cors({ credentials: true, origin: "*" }));
    server.use(bodyParser.json());
    // server.use(cookieParser(process.env.MONGO_SESSION_SECRET));

    // iniciar sessao de usuário no mongo
    // por padrão a sessao expira em 14 dias
    server.use(
        session({
            // tempo de vida do token (segundos)
            ttl: process.env.TOKEN_EXPIRATION_TIME,
            secret: process.env.MONGO_SESSION_SECRET,
            resave: true,
            saveUninitialized: true,
            cookie: { secure: !development_mode },
            store: new MongoStore({ mongooseConnection: mongoose.connection })
        })
    );

    // passar a referencia de instancia do next para todas as rotas
    server.use((req, res, next) => {
        req.nextapp = nextapp;
        next();
    });

    server.use(routes);

    server.get("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(PORT, error => {
        if (error) throw error;
        console.log(`Server sendo escutado na porta: http://localhost:${PORT}`);
    });
});
