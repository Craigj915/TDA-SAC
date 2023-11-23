const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({
  name: String,
  manager: String,
  members: Array,
  date: String,
  active: Boolean,
});

module.exports.Team = mongoose.model("Team", teamSchema);