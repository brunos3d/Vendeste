const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
            select: false
        },
        wishlist: [{ type: Schema.Types.ObjectId, ref: "Product" }]
    },
    { timestamps: true }
);

UserSchema.pre("save", function(next) {
    const hash = bcrypt.hashSync(this.password, 10);
    this.password = hash;
    next();
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
