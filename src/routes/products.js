const express = require('express');
const router = express.Router();
const path = require('path');
const productsController = require('../controllers/productsController');
const adminMiddleware = require('../middlewares/adminMiddleware');
const multer = require('multer');

/* -------------------
   MULTER
-------------------*/
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../public/images/uploads/productDetail'))
  },
  filename: function (req, file, cb) {
    let nombreTodoJunto = req.body.nombre;
    nombreTodoJunto = nombreTodoJunto.replace(/ /g, "");
    cb(null, nombreTodoJunto + '-' + Date.now() + path.extname(file.originalname))
  }
})
let upload = multer({ storage: storage })

/* -------------------
   VISTAS PRODUCTS
-------------------*/
router.get('/', productsController.index); //TODOS LOS PRODUCTOS
router.get('/:id', productsController.detailProduct); //DETALLE DE PRODCUTO

/* -------------------
   CREAR PRODUCTOS
-------------------*/
router.get('/create', adminMiddleware, productsController.create); //CREAR UN PRODUCTO - SOLO ADMINS
router.post('/create', upload.any(), productsController.store); //CREAR UN PRODUCTO - POST

/* -------------------
   MODIF. PRODUCTOS
-------------------*/
router.get('/allProductsModify', adminMiddleware, productsController.allProductsModify); //TODOS LOS PRODUCTOS PARA EDITAR - SOLO ADMIN
router.get('/edit/:id', adminMiddleware, productsController.editProduct); //EDITAR UN PRODUCTO - SOLO ADMINS
router.put('/edit/:id', productsController.updateProduct); //EDITAR UN PRODUCTO - POST
router.delete('/delete/:id', productsController.destroy); //ELIMINA UN PRODUCTO - POST

module.exports = router;