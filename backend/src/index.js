// const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes");
const database = require("./database");

if (process.env.NODE_ENV === "development") {
    dotenv.config({ path: ".env.development.local" });
}

const app = express();
const port = process.env.PORT || 3333;

app.disable("x-powered-by");

database.connect();

// app.use(cors());
app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Server listening on: http://localhost:${port}`);
});
