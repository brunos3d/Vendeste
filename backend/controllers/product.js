const ProductModel = require("../models/product");

module.exports = {
    async getAll(req, res) {
        ProductModel.find({})
            .select(["-__v", "-createdAt", "-updatedAt"])
            .then(products => {
                return res.send(products);
            })
            .catch(error => {
                // return res.status(400).send({ error });
                return res.status(404).send({ error: "Os produtos não foram encontrados!" });
            });
    },
    async findById(req, res) {
        const productId = req.params.id;

        ProductModel.findById(productId)
            .select(["-__v", "-createdAt", "-updatedAt"])
            .then(product => {
                return res.send(product);
            })
            .catch(error => {
                // return res.status(400).send({ error });
                return res.status(404).send({ error: "O produto não pode ser encontrado!" });
            });
    },
    async create(req, res) {
        ProductModel.create(req.body)
            .then(new_product => {
                // return res.send(new_product);
                return res.send({ success: true, result: new_product });
            })
            .catch(error => {
                // return res.status(400).send({ error });
                return res.status(400).send({ error: "Falha ao criar novo produto!" });
            });
    }
};
