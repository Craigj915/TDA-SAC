const mongoose = require("mongoose");

const roleSchema = mongoose.Schema({
    role: String,
  permissions: [{
    type: String
  }]
});

module.exports.Role = mongoose.model("Role", roleSchema);