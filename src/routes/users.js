
const express = require('express');
const router = express.Router();
const path = require('path');
const usersController = require('../controllers/usersController');
const multer = require('multer');
const registerLogMiddleware = require('../middlewares/registerLogMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const registerValidation = require('../validations/registerValidations');
const loginValidation = require('../validations/loginValidations');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/images/uploads/users'))
    },
    filename: function (req, file, cb) {
      cb(null, req.body.email + '-' + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({ storage: storage })

/* -------------------
   PERFIL USUARIO
-------------------*/
router.get('/', authMiddleware, usersController.users); // EL USUARIO - SOLO USR LOGUEADOS

/* -------------------
   REGISTRO - USR
-------------------*/
router.get('/register', guestMiddleware, usersController.register); //CREAR UN USUARIO - SOLO URS VISITANTE
router.post('/register', upload.any(), registerValidation, registerLogMiddleware, usersController.save); //CREAR UN USUARIO - POST
router.get('/registerEdit', authMiddleware, usersController.registerEdit); //EDITAR USUARIO - SOLO USR LOGUEADOS
//router.put('/registerEdit/:id', authMiddleware, xxxxxxxxxx); //EDITAR USUARIO - POST

/* -------------------
   REGISTRO - ADMIN
-------------------*/
// router.get('/registerAdminList', adminMiddleware, usersController.registerAdminList); //LISTADO USUARIOS - SOLO ADMINS
// router.get('/register/:id', adminMiddleware, productsController.editProduct); //EDITAR UN PRODUCTO - SOLO ADMINS
//router.post('/suspend/:id', productsController.suspend); //SUSPENDE UN USUARIO - POST

/* -------------------
   LOGIN
-------------------*/
router.get('/login', guestMiddleware, usersController.login); // LOGIN - SOLO URS VISITANTE
router.post('/login', loginValidation, usersController.verify); // LOGIN - POST
router.get('/logout', authMiddleware, usersController.logout); // LOGOUT - SOLO USR LOGUEADOS

module.exports = router;
