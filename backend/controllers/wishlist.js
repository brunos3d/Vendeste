const UserModel = require("../models/user");

module.exports = {
    async index(req, res) {
        UserModel.findById(req.session.userId).then(user => {
            const { wishlist } = user;

            return res.send(wishlist);
        });
    },
    async store(req, res) {
        UserModel.findById(req.session.userId).then(user => {
            const { productId } = req.headers;

            user.wishlist.push(productId);

            user.save().then(() => {
                return res.send(user.wishlist);
            });
        });
    }
};
