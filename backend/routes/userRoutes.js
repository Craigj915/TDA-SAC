const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.post("/register", UserController.register);
router.put("/status/:id", UserController.status);
router.put('/update/:id', UserController.update);
router.delete("/delete/:id", UserController.remove);
router.put("/notifications/:email", UserController.notifications);
router.get("/:token", UserController.getUserByToken);

module.exports = router;
