const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carouselSchema = new Schema({
  image: {
    type: String,
  },
});

module.exports = mongoose.model("Carousel", carouselSchema);
