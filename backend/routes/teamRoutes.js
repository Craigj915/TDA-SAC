const express = require('express');
const router = express.Router();
const TeamController = require('../controllers/teamController');

router.post('/register', TeamController.register);
router.put('/update/:id', TeamController.update);
router.delete("/delete/:id", TeamController.remove);

module.exports = router;