const ProductModel = require("../models/product");

module.exports = {
    async index(req, res) {
        const { name } = req.body;

        ProductModel.findOne({ name }).then(product => {
            return res.send(product);
        });
    },
    async create(req, res) {
        const { name, description, price } = req.body;

        ProductModel.create(req.body)
            .then(new_product => {
                return res.send(new_product);
            })
            .catch(error => {
                // return res.status(400).send({ error });
                return res.status(400).send({ error: "Falha ao criar novo produto!" });
            });
    }
};
