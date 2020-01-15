const UserModel = require("../models/user");
const ProductModel = require("../models/product");

module.exports = {
    async index(req, res) {
        UserModel.findById(req.session.userId).then(user => {
            user.password = undefined;

            ProductModel.find({ _id: { $in: user.wishlist } })
                .select(["-__v", "-createdAt", "-updatedAt"])
                .then(products => {
                    const ids = user.wishlist.map(product => product._id);

                    products.sort((a, b) => ids.indexOf(a._id) - ids.indexOf(b._id));

                    user.wishlist = products;

                    return res.send(user);
                });
        });
    }
};
