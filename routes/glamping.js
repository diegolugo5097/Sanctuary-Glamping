const express = require("express");
const router = express.Router();

const {
  createGlamping,
  deleteGlamping,
  getGlampings,
  updateGlamping,
} = require("../controllers/glampingController");

router.post("/create", createGlamping);
router.delete("/delete/:id", deleteGlamping);
router.get("/glampings", getGlampings);
router.patch("/update/:id", updateGlamping);

module.exports = router;
