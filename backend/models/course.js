const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  title: String,
  username: String,
  date: String,
  colour: String,
  description: String,
});

module.exports.Course = mongoose.model("Course", courseSchema);