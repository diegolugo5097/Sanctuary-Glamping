const express = require("express");
const router = express.Router();

const {
  createContact,
  deleteContact,
  getContact,
  updateContact,
} = require("../controllers/contactController");

router.post("/create", createContact);
router.delete("/delete/:id", deleteContact);
router.get("/contacts", getContact);
router.patch("/update/:id", updateContact);

module.exports = router;
