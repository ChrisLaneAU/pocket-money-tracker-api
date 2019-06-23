const mongoose = require("mongoose");

const GoalModel = mongoose.model("goal", {
  name: String,
  image: String,
  child: String,
  price: Number,
  progress: Number
});

module.exports = GoalModel;
