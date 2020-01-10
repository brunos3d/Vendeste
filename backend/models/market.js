const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MarketSchema = new Schema(
    {
        country: {
            type: String,
            required: true
        },
        products: [{ type: Schema.Types.ObjectId, ref: "Product" }]
    },
    {
        timestamps: true
    }
);

const MarketModel = mongoose.model("Market", MarketSchema);

module.exports = MarketModel;
