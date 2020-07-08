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
      cb(null, req.body.idProdcuto + '-' + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({ storage: storage })

router.get('/', productsController.index);
// router.post('/', ); 

//CREAR UN PRODUCTO
router.get('/create', productsController.create);
router.post('/create', upload.any(), productsController.store);

//DETALLE DE UN PRODUCTO
router.get('/:id', productsController.detailProduct);
//EDITAR UN PRODUCTO
router.get('/:id', productsController.editProduct);
router.put('/:id', productsController.updateProduct);

// ELIMINAR UN PRODUCTO
router.delete('/delete/:productId', productsController.destroy);

module.exports = router;