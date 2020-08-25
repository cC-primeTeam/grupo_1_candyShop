const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

/* -------------------
   HOME
-------------------*/
router.get('/checkUser/:email', apiController.check);

module.exports = router;