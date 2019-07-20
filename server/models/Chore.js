const mongoose = require("mongoose");

const ChoreModel = mongoose.model("chore", {
  name: String,
  description: String,
  index: Number,
  value: Number
});

module.exports = ChoreModel;
