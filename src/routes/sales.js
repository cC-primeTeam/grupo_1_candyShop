var express = require('express');
var router = express.Router();
let salesController = require('../controllers/salesController');
const authMiddleware = require('../middlewares/authMiddleware');

/* -------------------
   CARRITO
-------------------*/
router.get('/purchase', authMiddleware, salesController.purchase);

module.exports = router;