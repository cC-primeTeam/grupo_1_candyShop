const express = require('express');
const router = express.Router();
const path = require('path');
const productsController = require('../controllers/productsController');
const multer = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/images/uploads/productDetail'))
    },
    filename: function (req, file, cb) {
      cb(null, req.body.nombre + '-' + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({ storage: storage })

//TODOS LOS PRODUCTOS
router.get('/', productsController.index);

//DETALLE DE PRODCUTO
router.get('/detail/:idProdcuto', productsController.detailProduct);

//CREAR UN PRODUCTO
router.get('/create', productsController.create);
router.post('/create', upload.any(), productsController.store);

//EDITAR UN PRODUCTO
router.get('/edit/:idProducto', productsController.editProduct);
router.put('/edit/:idProducto', productsController.updateProduct);

// ELIMINAR UN PRODUCTO
router.delete('/delete/:productId', productsController.destroy);

module.exports = router;