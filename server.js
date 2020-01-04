const next = require("next");
// const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./backend/routes");
const fetch = require("isomorphic-unfetch");
const database = require("./backend/database");

const development_mode = (process.env.NODE_ENV || "return").includes("development");

if (development_mode) {
    dotenv.config({ path: ".env.development.local" });
    console.warn("=== MODO DE DESENVOLVIMENTO ATIVO! ===");
}

const port = process.env.PORT;
const protocol = development_mode ? "http" : "https";
const api_url = `${protocol}://localhost:${port}/api`;

database.connect();

const app = next({ dev: development_mode });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.disable("x-powered-by");

    // app.use(cors());
    server.use(bodyParser.json());
    server.use(routes);

    server.get("/", async (req, res) => {
        const response = await fetch(api_url + "/products");

        app.render(req, res, "/", { products: await response.json() });
    });

    server.get("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(port, error => {
        if (error) throw error;
        console.log(`Server sendo escutado na porta: http://localhost:${port}`);
    });
});
