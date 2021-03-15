const express = require("express");
const router = express.Router();

const {
  createCarousel,
  getCarousel,
  updateCarousel,
  deleteCarousel,
} = require("../controllers/carouselController");

router.post("/create", createCarousel);
router.get("/carousel", getCarousel);
router.patch("/update/:id", updateCarousel);
router.delete("/delete/:id", deleteCarousel);

module.exports = router;
