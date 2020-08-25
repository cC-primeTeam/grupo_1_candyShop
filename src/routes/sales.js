const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');
const authMiddleware = require('../middlewares/authMiddleware');

/* -------------------
   CARRITO
-------------------*/
router.get('/purchase', authMiddleware, salesController.purchase); //Vista carrito
router.get('/shopping/erase/:id', salesController.itemErase); //borra item
router.get('/shopping/:id', salesController.itemAdd); //agrega item
router.get('/shopping/clean', salesController.cartClean); //vacia carrito
module.exports = router;