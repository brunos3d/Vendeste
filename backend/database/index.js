const mongoose = require("mongoose");

module.exports = {
    createConnection() {
        const DB_USERNAME = process.env.DB_USERNAME;
        const DB_PASSWORD = process.env.DB_PASSWORD;

        const DB_URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0-culqu.mongodb.net/${DB_USERNAME}?retryWrites=true&w=majority`;

        return mongoose.createConnection(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
    }
};
