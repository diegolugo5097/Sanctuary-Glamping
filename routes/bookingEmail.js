const { Router } = require("express");
const router = Router();

const { email } = require("../controllers/bookingEmail");

router.post("/booking-email", email);

module.exports = router;
