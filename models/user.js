const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  secrets: [
    {
      secret: {type: String},
      access: {type: Array}
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
