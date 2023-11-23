const mongoose = require("mongoose");

const sickSchema = mongoose.Schema({
  title: String,
  userid: String,
  email: String,
  startDate: String,
  endDate: String,
  totalDays: Number,
  colour: String,
  note: String,
});

module.exports.Sick = mongoose.model("Sick", sickSchema);