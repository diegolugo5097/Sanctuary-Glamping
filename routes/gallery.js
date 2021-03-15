const express = require("express");
const router = express.Router();

const {
  createGallery,
  deleteGallery,
  getGallery,
  updateGallery,
} = require("../controllers/galleryController");

router.post("/create", createGallery);
router.get("/galleries", getGallery);
router.patch("/update/:id", updateGallery);
router.delete("/delete/:id", deleteGallery);

module.exports = router;
