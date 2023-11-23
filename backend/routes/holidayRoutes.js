const express = require("express");
const router = express.Router();
const HolidayRoutes = require("../controllers/holidayController");

router.post("/register", HolidayRoutes.register);
router.put("/update/:id", HolidayRoutes.update);
router.delete("/delete/:id", HolidayRoutes.remove);

module.exports = router;
