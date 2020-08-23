var express = require('express');
var router = express.Router();
let salesController = require('../controllers/salesController');
const authMiddleware = require('../middlewares/authMiddleware');

/* -------------------
   CARRITO
-------------------*/
// router.get('/cart', userController.cart);
// router.get('/cart/add/:id', userController.cartAdd);
// router.get('/cart/destroy/:id', userController.cartDestroy);

module.exports = router;