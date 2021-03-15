const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const glampingSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      maxlength: 60,
    },
    description: {
      type: String,
      trim: true,
      require: true,
      maxlength: 5000,
    },
    image_1: {
      type: String,
    },
    image_2: {
      type: String,
    },
    image_3: {
      type: String,
    },
    image_4: {
      type: String,
    },
    image_5: {
      type: String,
    },
    image_6: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Glamping", glampingSchema);
