const mongoose = require("mongoose");

const GoalModel = mongoose.model("goal", {
  name: String,
  image: String,
  child: String,
  price: String,
  progress: String
});

module.exports = GoalModel;
