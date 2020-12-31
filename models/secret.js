const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const secretSchema = new Schema([
        {
            secret: {type: String},
            access: {type: Array}
        }
])

const Secret = mongoose.model("Secret",secretSchema)

module.exports = Secret