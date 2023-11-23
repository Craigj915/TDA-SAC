const express = require("express");
const router = express.Router();
const SickController = require("../controllers/sickController");

router.post("/register", SickController.register);

module.exports = router;
