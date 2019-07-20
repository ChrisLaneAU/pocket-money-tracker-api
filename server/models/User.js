const mongoose = require("mongoose");

const UserModel = mongoose.model("user", {
  name: String,
  image: String,
  passwordDigest: String
});

module.exports = UserModel;
