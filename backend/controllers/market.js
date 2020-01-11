const MarketModel = require("../models/market");
const ProductModel = require("../models/product");

module.exports = {
    async index(req, res) {
        const { country } = req.body;

        MarketModel.findOne({ country }).then(market => {
            return res.send(market);
        });
    },
    async create(req, res) {
        const { country, products } = req.body;

        ProductModel.create(products)
            .then(new_products => {
                const ids = new_products.map(prod => prod._id);

                MarketModel.create({ country, ids })
                    .then(new_market => {
                        return res.send(new_market);
                    })
                    .catch(error => {
                        if (error) {
                            switch (error.code) {
                                case 11000:
                                    return res.status(400).send({ error: "O país informado já está registrado!" });
                            }
                        }
                        return res.status(400).send({ error: "Falha ao criar novo mercado!" });
                    });
            })
            .catch(error => {
                // return res.status(400).send({ error });
                return res.status(400).send({ error: "Falha ao criar novo mercado!" });
            });
    }
};
