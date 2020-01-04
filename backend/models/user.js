const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
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
    createAt: {
        type: Date,
        default: Date.now
    }
});

UserSchema.pre("save", async function(next) {
    // console.log("password", this.password);
    const hash = await bcrypt.hash(this.password, 7);
    // console.log("hash", hash);
    this.password = hash;
    next();
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
