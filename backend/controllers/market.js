const MarketModel = require("../models/market");

module.exports = {
    async index(req, res) {
        MarketModel.findById(req.session.userId).then(user => {
            const { wishlist } = user;

            return res.send(wishlist);
        });
    },
    async store(req, res) {
        MarketModel.findById(req.session.userId).then(user => {
            const { productId } = req.headers;

            user.wishlist.push(productId);

            user.save().then(() => {
                return res.send(user.wishlist);
            });
        });
    }
};
