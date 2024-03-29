// const cookieParser = require("cookie-parser");
const next = require("next");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const routes = require("./backend/routes");

const development_mode = (process.env.NODE_ENV || "return").includes("development");

if (development_mode) {
    dotenv.config({ path: ".env.development.local" });
    console.warn("=== MODO DE DESENVOLVIMENTO ATIVO! ===");
}

const { PORT, TOKEN_EXPIRATION_TIME, DB_USERNAME, DB_PASSWORD, MONGO_SESSION_SECRET, COOKIE_MAX_AGE } = process.env;
const DB_URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0-culqu.mongodb.net/${DB_USERNAME}?retryWrites=true&w=majority`;

if (development_mode) {
    console.log("MongoDB URI de conexão:", DB_URI);
}

mongoose.connect(DB_URI, {
    // funcao depreciada: desativar para habilitar o metodo "findByIdAndUpdate"
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const nextapp = next({ dev: development_mode });
const handle = nextapp.getRequestHandler();

nextapp.prepare().then(() => {
    const server = express();

    // o certificado SSL eh encerrado pelo heroku antes de chegar ao app
    // ativa o uso de proxy seguro, habilitando funcoes de seguranca como "secure cookies" por exemplo
    server.set("trust proxy", 1);
    server.disable("x-powered-by");

    server.use(cors());
    // server.use(cors({ origin: "*", credentials: true }));
    // server.use(cors({ origin: baseURL, credentials: true }));
    server.use(express.json());
    // server.use(bodyParser.urlencoded({ extended: true }));

    // server.use(cookieParser());
    // iniciar sessao de usuário no mongo
    server.use(
        session({
            // nome do cookie
            name: "exss",
            unset: "destroy",
            // atualizar tempo de vida da sessao a cada requisicao
            rolling: true,
            resave: false,
            // salva a sessao no banco apenas quando o user eh autenticado/registrado
            saveUninitialized: false,
            // tempo de vida do token (segundos)
            ttl: +TOKEN_EXPIRATION_TIME,
            secret: MONGO_SESSION_SECRET,
            cookie: {
                maxAge: +COOKIE_MAX_AGE,
                httpOnly: false,
                secure: !development_mode
            },
            store: new MongoStore({ mongooseConnection: mongoose.connection })
        })
    );

    server.use((req, res, next) => {
        // passar a referencia de instancia do next para todas as rotas
        req.nextapp = nextapp;
        req.isAuth = req.session.hasOwnProperty("userId");
        // atualizar tempo de vida da sessao a cada requisicao
        // substituido passando o parametro "rolling=true"
        // req.session._garbage = Date();
        // req.session.touch();
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
