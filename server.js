const next = require("next");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const routes = require("./backend/routes");
const database = require("./backend/database");
const UserModel = require("./backend/models/user");
const { authMiddleware } = require("./backend/middlewares/auth");

const development_mode = (process.env.NODE_ENV || "return").includes("development");

if (development_mode) {
    dotenv.config({ path: ".env.development.local" });
    console.warn("=== MODO DE DESENVOLVIMENTO ATIVO! ===");
}

const port = process.env.PORT;
const protocol = "http"; //development_mode ? "http" : "https";
const api_url = `${protocol}://localhost:${port}/api`;

database.connect();

const nextapp = next({ dev: development_mode });
const handle = nextapp.getRequestHandler();

nextapp.prepare().then(() => {
    const server = express();

    server.disable("x-powered-by");

    server.use(cors({ credentials: true, origin: "*" }));
    server.use(bodyParser.json());
    server.use(cookieParser(process.env.COOKIES_SECRET));

    // passar a referencia de instancia do next para todas as rotas
    server.use((req, res, next) => {
        req.nextapp = nextapp;
        next();
    });

    server.use(routes);

    // test
    server.get("/redirect/to/home", async (req, res) => {
        res.redirect("/");
    });

    server.get("/", authMiddleware, async (req, res) => {
        const response = await axios.get(api_url + "/products");

        // const expires = new Date();
        // expires.setDate(expires.getDate() + 7);

        // res.cookie("ttx", "hash bem loko", { expires, signed: true, httpOnly: true, secure: true });

        // console.log(req.signedCookies["ttx"]);

        const indexProps = { products: response.data };

        if (req.userId) {
            const user = await UserModel.findById(req.userId);
            indexProps.username = user.name;
        }

        nextapp.render(req, res, "/", indexProps);
    });

    server.get("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(port, error => {
        if (error) throw error;
        console.log(`Server sendo escutado na porta: ${protocol}://localhost:${port}`);
    });
});
