var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsController');

//router.get('/', productsController.index);
// router.post('/', );

//router.get('/:productoId', productsController.detailProduct);

//CREAR UN PRODUCTO
router.get('/create', productsController.create);
router.post('/create', productsController.store);

//EDITAR UN PRODUCTO
router.get('/:productoId', productsController.editProduct);
router.put('/:productoId', productsController.updateProduct);

// ELIMINAR UN PRODUCTO
router.delete('/delete/:productId', productsController.destroy);

module.exports = router;