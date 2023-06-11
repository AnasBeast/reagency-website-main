const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/booking");
const auth = require("../middleware/auth");

router.post("" , bookingController.createBooking);

router.get("",auth, bookingController.getBookings);

router.get("/:id",auth, bookingController.getHotelById);

router.delete("/:id",auth , bookingController.deleteBooking);

router.post("/search",auth, bookingController.searchBookings);

module.exports = router;