var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsController');

router.get('/', productsController.index);
// router.post('/', );

//CREAR UN PRODUCTO
router.get('/create', productsController.create);
router.post('/create', productsController.store);

//DETALLE DE UN PRODUCTO
router.get('/:id', productsController.detailProduct);
//EDITAR UN PRODUCTO
router.get('/:id', productsController.editProduct);
router.put('/:id', productsController.updateProduct);

// ELIMINAR UN PRODUCTO
router.delete('/delete/:productId', productsController.destroy);

module.exports = router;