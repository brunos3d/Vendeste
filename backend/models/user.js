const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
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
        }
    },
    {
        timestamps: true
    }
);

UserSchema.pre("save", async function(next) {
    const hash = await bcrypt.hash(this.password, 7);
    this.password = hash;
    next();
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
