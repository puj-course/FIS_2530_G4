const express = require('express');
const router = express.Router();
const { sendMotivation } = require('../controllers/notificationController');

router.post('/send', sendMotivation);

module.exports = router;
