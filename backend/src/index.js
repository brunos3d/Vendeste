const path = require("path");
const cors = require("cors");
const express = require("express");

const port = process.env.PORT || 3333;

const app = express();

app.disable("x-powered-by");

app.use(cors());

app.use(express.static(path.join(__dirname, "../../frontend/build")));

app.get("/products", (req, res) => {
    const products = ["Maçã", "Banana", "Abacaxi", "Goiaba", "Limão"];
    return res.send(products);
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "../../frontend/build"));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});
