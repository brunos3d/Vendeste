const UserModel = require("../models/user");

module.exports = {
    async index(req, res) {
        UserModel.findById(req.session.userId)
            .then(user => {
                const { wishlist } = user;

                return res.send(wishlist);
            })
            .catch(error => {
                // return res.status(400).send({ error });
                return res.status(404).send({ error: "A Lista de desejos não pode ser encontrada!" });
            });
    },
    async additem(req, res) {
        const { productId } = req.body;

        UserModel.findByIdAndUpdate(req.session.userId, { $addToSet: { wishlist: productId } }).then(user => {
            return res.send({ success: true, result: user.wishlist });
        });
    },
    async removeitem(req, res) {
        const { productId } = req.body;

        UserModel.findByIdAndUpdate(req.session.userId, { $pull: { wishlist: productId } }).then(user => {
            return res.send({ success: true, result: user.wishlist });
        });
    }
};
