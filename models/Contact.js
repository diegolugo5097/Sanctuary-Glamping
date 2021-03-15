const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: {
    type: String,
    require: true,
    maxlength: 60,
  },
  phone: {
    type: String,
    require: true,
    maxlength: 60,
  },
  email: {
    type: String,
    require: true,
    maxlength: 60,
  },
  message: {
    type: String,
    require: true,
    maxlength: 5000,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
