const mongoose = require("mongoose");

const holidaySchema = mongoose.Schema({
  title: String,
  userid: String,
  email: String,
  startDate: String,
  endDate: String,
  totalDays: Number,
  colour: String,
  note: String,
  remaining: Number,
  approved: Boolean,
});

holidaySchema.statics.findByEmail = function (email) {
  return this.findOne({ email });
};

module.exports.Holiday = mongoose.model("Holiday", holidaySchema);