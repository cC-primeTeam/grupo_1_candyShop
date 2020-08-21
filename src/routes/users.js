
/************** REQUIRES **************/
const express = require('express');
const router = express.Router();
const path = require('path');
const usersController = require('../controllers/usersController');
const multer = require('multer');

/************** MIDDLEWARES **************/
const registerLogMiddleware = require('../middlewares/registerLogMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const userIdVerifyMiddleware = require('../middlewares/userIdVerifyMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

/**************  VALIDATIONS **************/
const registerValidation = require('../validations/registerValidations');
const loginValidation = require('../validations/loginValidations');

/**************  MULTER **************/
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/images/uploads/users'))
    },
    filename: function (req, file, cb) {
      cb(null, req.body.email + path.extname(file.originalname))
    }
})
let upload = multer({ storage: storage })

/* ----------------------------------
   LOGIN Y PERFIL USUARIO LOGUEADO   
---------------------------------- */
/************ SOLO VISITANTES ************/
router.get('/login', guestMiddleware, usersController.login); //LOGIN
router.post('/login', loginValidation, userIdVerifyMiddleware.suspend, usersController.verify); //LOGIN
/************ SOLO USUARIOS LOGUEADOS ************/
router.get('/', authMiddleware, usersController.users); //PERFIL DEL USR
/************ SOLO USUARIOS SUSPENDIDOS ************/
router.get('/suspend', usersController.suspend); //USUARIO SUSPENDIDO
/************ PARA TODOS ************/
router.get('/logout', usersController.logout); //LOGOUT

/* --------------------------------
  REGISTRO Y EDICION DE USUARIOS     
-------------------------------- */
/************ SOLO VISITANTES ************/
router.get('/register', guestMiddleware, usersController.register); //CREA USR
router.post('/register', upload.any(), registerValidation, registerLogMiddleware, usersController.save); //CREA USR

/************ SOLO ACCEDE A SU USUARIO ************/
router.get('/registerEdit/:id', authMiddleware, userIdVerifyMiddleware.idOk, usersController.regEdit); //EDITA USR
router.put('/registerEdit/:id', upload.any(), authMiddleware, userIdVerifyMiddleware.idOk, usersController.regUpdt); //EDITA USR

/* --------------------- 
   MANEJO DE USUARIOS   
--------------------- */
/************ SOLO ADMINISTRADORES ************/
router.get('/listUsersForAdmin', authMiddleware, adminMiddleware.verify, usersController.list);//LISTADO USRS

router.get('/usrManagementForAdmin/:id', authMiddleware, adminMiddleware.verify, usersController.usrManage);//EDITAR USRS
router.put('/usrManagementForAdmin/:id', upload.any(), adminMiddleware.verify, usersController.usrManageUpdt);//EDITAR USRS

/* -----------------------
   MUESTRA JSON USUARIO   
----------------------- */
/************ SOLO ACCEDE A SU USUARIO ************/
router.get('/detail/:id', authMiddleware, userIdVerifyMiddleware.idOk, usersController.detail); //JSON

module.exports = router;
