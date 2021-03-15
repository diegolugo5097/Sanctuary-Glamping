const express = require("express");
const router = express.Router();

const {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} = require("../controllers/userController");

router.post("/create", createUser);
router.delete("/delete/:id", deleteUser);
router.get("/users", getUsers);
router.patch("/update/:id", updateUser);

module.exports = router;
