const express = require('express');
const router = express.Router();
const path = require('path');
const productsController = require('../controllers/productsController');
const authMiddleware = require('../middlewares/authMiddleware');
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
    let nombreTodoJunto = req.body.name;
    nombreTodoJunto = nombreTodoJunto.replace(/ /g, "");
    cb(null, nombreTodoJunto + path.extname(file.originalname))
  }
})
let upload = multer({ storage: storage })
/* -------------------
PRUEBAS DB
-------------------*/





router.get('/', productsController.all);
router.get('/category/:id', productsController.categoryFilterView);
router.get('/category/:id/offer', productsController.categoryFilterViewOffer);
router.get('/category/:id/cheeky', productsController.categoryFilterViewCheeky);
router.get('/offer', productsController.offers);
router.get('/cheeky', productsController.cheeky);
router.get('/create', authMiddleware, adminMiddleware.verify, productsController.create);//
router.post('/create', upload.any(), productsController.store);


router.get('/allProductsModify', productsController.allProductsModify);

router.get('/edit/:id', productsController.editProduct);
router.put('/edit/:id', upload.any(), productsController.updateProduct);

router.delete('/delete/:id', productsController.destroy);

router.get('/:id', productsController.detailProduct);


/* -------------------
VISTAS PRODUCTS
-------------------*/
//  router.get('/', productsController.index); //TODOS LOS PRODUCTOS
/* -------------------
VISTAS FILTRADO CATEGORIAS
-------------------*/
// router.get('/categoryalfajores', productsController.categoryAlfajores); //VISTA CATEGORIA ALFAJORES

/* -------------------
CREAR PRODUCTOS
-------------------*/
//  router.get('/create', adminMiddleware, productsController.create); //CREAR UN PRODUCTO - SOLO ADMINS
//  router.post('/create', upload.any(), productsController.store); //CREAR UN PRODUCTO - POST

/* -------------------
MODIF. PRODUCTOS
-------------------*/
//  router.get('/allProductsModify', adminMiddleware, productsController.allProductsModify); //TODOS LOS PRODUCTOS PARA EDITAR - SOLO ADMIN
//  router.get('/edit/:id', adminMiddleware, productsController.editProduct); //EDITAR UN PRODUCTO - SOLO ADMINS 
//  router.put('/edit/:id', productsController.updateProduct); //EDITAR UN PRODUCTO - POST
//  router.delete('/delete/:id', productsController.destroy); //ELIMINA UN PRODUCTO - POST

/* -------------------
VISTAS VARIABLE (ID)
-------------------*/
//  router.get('/:id', productsController.detailProduct); //DETALLE DE PRODCUTO
module.exports = router;