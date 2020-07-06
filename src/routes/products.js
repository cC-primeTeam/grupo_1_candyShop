var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsController');

router.get('/', productsController.index);
// router.post('/', );
router.get('/create', productsController.create);
router.get('/:id', productsController.detailProduct);
router.get('/:id/edit', productsController.editProduct);
// router.put('/:id', xxxxxxxxxx);
// router.delete('/:id', xxxxxxxxxx);

module.exports = router;