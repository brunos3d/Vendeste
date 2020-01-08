const UserModel = require("../models/user");

module.exports = {
    async index(req, res) {
        const user = await UserModel.findById(req.session.userId);

        user.password = undefined;

        return res.send({
            ...user._doc,
            wishlist: [
                { product: "touca", price: 29.99 },
                { product: "sapato", price: 9.99 },
                { product: "camiseta", price: 19.99 }
            ]
        });
    }
};
