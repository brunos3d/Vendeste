const UserModel = require("../models/user");
const ProductModel = require("../models/product");

module.exports = {
    async index(req, res) {
        UserModel.findById(req.session.userId).then(user => {
            user.password = undefined;

            ProductModel.find({ _id: { $in: user.wishlist } })
                .select(["-__v", "-createdAt", "-updatedAt"])
                .then(products => {
                    user.wishlist = products;

                    return res.send(user);
                });
        });
    }
};
