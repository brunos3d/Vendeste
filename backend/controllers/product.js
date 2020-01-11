const ProductModel = require("../models/product");

module.exports = {
    async index(req, res) {
        ProductModel.find({})
            .select(["-_id", "-__v", "-createdAt", "-updatedAt"])
            .then(products => {
                return res.send(products);
            });
    },
    async create(req, res) {
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
