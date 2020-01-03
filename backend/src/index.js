const path = require("path");
// const cors = require("cors");
const express = require("express");

const routes = require("./routes");

const port = process.env.PORT || 3333;

const app = express();

app.disable("x-powered-by");

// app.use(cors());
app.use(routes);

app.use(express.static(path.join(__dirname, "../../frontend/build")));

app.get(["/", "/index", "/home", "/index.html"], (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/build/index.html"));
});

app.get("*", (req, res) => {
    res.status(404).send("ERRO :[");
});

app.listen(port, () => {
    console.log(`Server listening on: http://localhost:${port}`);
});
