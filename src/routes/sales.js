var express = require('express');
var router = express.Router();
let salesController = require('../controllers/salesController');

router.get('/', salesController.carrito);

module.exports = router;