const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo");
const auth = require("../middleware/auth");

router.post("",auth , todoController.createHotel);

router.put("/:id",auth , todoController.updateHotel);

router.get("", todoController.getHotels);

router.get("/:id", todoController.getHotelById);

router.delete("/:id",auth , todoController.deleteHotel);

router.post("/search", todoController.searchHotels);

module.exports = router;