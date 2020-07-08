var express = require('express');
var router = express.Router();
let salesController = require('../controllers/salesController');

router.get('/purchase', salesController.purchase);

module.exports = router;