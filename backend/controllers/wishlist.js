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
        UserModel.findById(req.session.userId).then(user => {
            const { productId } = req.body;

            user.wishlist.push(productId);

            user.save().then(() => {
                return res.send({ success: true });
            });
        });
    }
};
