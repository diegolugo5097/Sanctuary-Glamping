const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gallerySchema = new Schema({
  image: {
    type: String,
  },
});

module.exports = mongoose.model("Gallery", gallerySchema);
