const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aboutUsSheme = new Schema(
  {
    description: {
      type: String,
      require: true,
      maxlength: 5000,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AboutUs", aboutUsSheme);
